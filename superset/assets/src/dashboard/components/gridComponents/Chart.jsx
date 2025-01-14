/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { exportChart } from '../../../explore/exploreUtils';
import SliceHeader from '../SliceHeader';
import ChartContainer from '../../../chart/ChartContainer';
import MissingChart from '../MissingChart';
import { slicePropShape, chartPropShape } from '../../util/propShapes';

const propTypes = {
  id: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  updateSliceName: PropTypes.func.isRequired,

  // from redux
  chart: PropTypes.shape(chartPropShape).isRequired,
  formData: PropTypes.object.isRequired,
  dashboardInfo: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
  }).isRequired,
  dashboardTitle: PropTypes.string.isRequired,
  datasource: PropTypes.object.isRequired,
  slice: slicePropShape.isRequired,
  sliceName: PropTypes.string.isRequired,
  sliceSubHeader: PropTypes.string.isRequired,
  timeout: PropTypes.number.isRequired,
  filters: PropTypes.object.isRequired,
  refreshChart: PropTypes.func.isRequired,
  executeRestAction: PropTypes.func.isRequired,
  toggleExpandSlice: PropTypes.func.isRequired,
  addFilter: PropTypes.func.isRequired,
  editMode: PropTypes.bool.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  supersetCanExplore: PropTypes.bool.isRequired,
  sliceCanEdit: PropTypes.bool.isRequired,
};

// we use state + shouldComponentUpdate() logic to prevent perf-wrecking
// resizing across all slices on a dashboard on every update
const RESIZE_TIMEOUT = 350;
const SHOULD_UPDATE_ON_PROP_CHANGES = Object.keys(propTypes).filter(
  prop => prop !== 'width' && prop !== 'height',
);
const OVERFLOWABLE_VIZ_TYPES = new Set(['filter_box']);

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.width,
      height: props.height,
    };

    this.addFilter = this.addFilter.bind(this);
    this.exploreChart = this.exploreChart.bind(this);
    this.exportCSV = this.exportCSV.bind(this);
    this.forceRefresh = this.forceRefresh.bind(this);
    this.executeRestAction = this.executeRestAction.bind(this);
    this.resize = this.resize.bind(this);
    this.setDescriptionRef = this.setDescriptionRef.bind(this);
    this.setHeaderRef = this.setHeaderRef.bind(this);
    this.itemClick = this.itemClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // this logic mostly pertains to chart resizing. we keep a copy of the dimensions in
    // state so that we can buffer component size updates and only update on the final call
    // which improves performance significantly
    if (
      nextState.width !== this.state.width ||
      nextState.height !== this.state.height
    ) {
      return true;
    }

    for (let i = 0; i < SHOULD_UPDATE_ON_PROP_CHANGES.length; i += 1) {
      const prop = SHOULD_UPDATE_ON_PROP_CHANGES[i];
      if (nextProps[prop] !== this.props[prop]) {
        return true;
      }
    }

    if (
      nextProps.width !== this.props.width ||
      nextProps.height !== this.props.height
    ) {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(this.resize, RESIZE_TIMEOUT);
    }

    return false;
  }

  componentWillUnmount() {
    clearTimeout(this.resizeTimeout);
  }

  getFilters() {
    return this.props.filters;
  }

  itemClick(data) {
    if (
      this.props.slice.form_data.hasOwnProperty('linked_slice') &&
      this.props.slice.form_data.linked_slice
    ) {
      this.cloneSliceAndAddToDashboard(
        this.props.slice.form_data.linked_slice,
        data,
      );
    }
  }

  cloneSliceAndAddToDashboard(linked_slice_id, filters) {
    // todo:: define a way to name cloned slice
    const slice_name = `clone_of_slice_id_${linked_slice_id}`;
    const requestParams = this.getRequestParamsForCloneSlice(
      linked_slice_id,
      slice_name,
    );
    this.props.getSliceById(linked_slice_id).then(data => {
      // todo:: append filters in formdata
      this.props.saveSlice(data.form_data, requestParams).then(data => {
        window.location = supersetURL(data.dashboard);
      });
    });
  }

  getRequestParamsForCloneSlice(slice_id, slice_name) {
    const dashId = this.getCurrentDashboardId();
    return {
      action: 'saveas',
      add_to_dash: 'existing',
      goto_dash: true,
      save_to_dashboard_id: dashId,
      slice_id,
      slice_name,
    };
  }

  getCurrentDashboardId() {
    return this.props.dashboardInfo.id;
  }

  getLoggedInUser() {
    return this.props.dashboardInfo.username;
  }

  getCurrentDashboardUrl() {
    return window.location.href;
  }

  getChartHeight(includeChartHeaderHeight = true) {
    const headerHeight = this.getHeaderHeight();
    const descriptionHeight =
      this.props.isExpanded && this.descriptionRef
        ? this.descriptionRef.offsetHeight
        : 0;
    return includeChartHeaderHeight
      ? this.state.height - headerHeight - descriptionHeight
      : this.state.height - descriptionHeight;
  }

  getHeaderHeight() {
    return (this.headerRef && this.headerRef.offsetHeight) || 30;
  }

  setDescriptionRef(ref) {
    this.descriptionRef = ref;
  }

  setHeaderRef(ref) {
    this.headerRef = ref;
  }

  resize() {
    const { width, height } = this.props;
    this.setState(() => ({ width, height }));
  }

  addFilter(...args) {
    this.props.addFilter(this.props.chart, ...args);
  }

  exploreChart() {
    exportChart(this.props.formData);
  }

  exportCSV() {
    exportChart(this.props.formData, 'csv');
  }

  forceRefresh() {
    return this.props.refreshChart(this.props.chart, true, this.props.timeout);
  }

  executeRestAction(action) {
    return this.props.executeRestAction(
      this.buildRestActionPayload(),
      action,
      this.props.timeout,
    );
  }

  buildRestActionPayload() {
    return {
      chart: this.props.chart,
      chart_title: this.props.sliceName,
      dashboard_url: this.getCurrentDashboardUrl(),
      filters: this.props.filters,
      dashboard_title: this.props.dashboardTitle,
      username: this.getLoggedInUser(),
    };
  }

  render() {
    const {
      id,
      chart,
      slice,
      datasource,
      isExpanded,
      editMode,
      filters,
      formData,
      updateSliceName,
      sliceName,
      sliceSubHeader,
      toggleExpandSlice,
      timeout,
      supersetCanExplore,
      sliceCanEdit,
    } = this.props;

    const { width } = this.state;

    // this prevents throwing in the case that a gridComponent
    // references a chart that is not associated with the dashboard
    if (!chart || !slice) {
      return <MissingChart height={this.getChartHeight()} />;
    }

    const canExportCSV = !formData.show_overlay;
    const { queryResponse, chartUpdateEndTime } = chart;
    const isCached = queryResponse && queryResponse.is_cached;
    const cachedDttm = queryResponse && queryResponse.cached_dttm;
    const isOverflowable = OVERFLOWABLE_VIZ_TYPES.has(slice && slice.viz_type);

    return (
      <div>
        {formData.chart_header && (
          <SliceHeader
            innerRef={this.setHeaderRef}
            slice={slice}
            isExpanded={!!isExpanded}
            isCached={isCached}
            cachedDttm={cachedDttm}
            updatedDttm={chartUpdateEndTime}
            toggleExpandSlice={toggleExpandSlice}
            forceRefresh={this.forceRefresh}
            executeRestAction={this.executeRestAction}
            editMode={editMode}
            annotationQuery={chart.annotationQuery}
            currentRestAction={chart.restAction}
            exploreChart={this.exploreChart}
            exportCSV={this.exportCSV}
            canExportCSV={canExportCSV}
            updateSliceName={updateSliceName}
            sliceName={sliceName}
            sliceSubHeader={sliceSubHeader}
            supersetCanExplore={supersetCanExplore}
            sliceCanEdit={sliceCanEdit}
            conf = {this.props.dashboardInfo.common.conf}
          />
        )}

        {/*
          This usage of dangerouslySetInnerHTML is safe since it is being used to render
          markdown that is sanitized with bleach. See:
             https://github.com/apache/incubator-superset/pull/4390
          and
             https://github.com/apache/incubator-superset/commit/b6fcc22d5a2cb7a5e92599ed5795a0169385a825
        */}
        {isExpanded && slice.description_markeddown && (
          <div
            className="slice_description bs-callout bs-callout-default"
            ref={this.setDescriptionRef}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: slice.description_markeddown }}
          />
        )}

        <div
          className={cx(
            'dashboard-chart',
            isOverflowable && 'dashboard-chart--overflowable',
          )}
        >
          <ChartContainer
            width={width}
            height={this.getChartHeight(formData.chart_header)}
            addFilter={this.addFilter}
            annotationData={chart.annotationData}
            chartAlert={chart.chartAlert}
            chartId={id}
            chartStatus={chart.chartStatus}
            datasource={datasource}
            filters={filters}
            formData={formData}
            queryResponse={chart.queryResponse}
            timeout={timeout}
            triggerQuery={chart.triggerQuery}
            vizType={slice.viz_type}
            itemClick={this.itemClick}
          />
        </div>
      </div>
    );
  }
}

Chart.propTypes = propTypes;

export default Chart;
