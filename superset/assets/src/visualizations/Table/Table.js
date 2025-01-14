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
import d3 from 'd3';
import $ from 'jquery';
import PropTypes from 'prop-types';
import dt from 'datatables.net-bs';
import 'datatables.net-bs/css/dataTables.bootstrap.css';
import dompurify from 'dompurify';
import { getNumberFormatter, NumberFormats } from '@superset-ui/number-format';
import { getTimeFormatter } from '@superset-ui/time-format';
import { fixDataTableBodyHeight } from '../../modules/utils';
import './Table.css';

dt(window, $);

const propTypes = {
  // Each object is { field1: value1, field2: value2 }
  data: PropTypes.arrayOf(PropTypes.object),
  height: PropTypes.number,
  alignPositiveNegative: PropTypes.bool,
  colorPositiveNegative: PropTypes.bool,
  columns: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
    format: PropTypes.string,
  })),
  filters: PropTypes.object,
  includeSearch: PropTypes.bool,
  metrics: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ])),
  onAddFilter: PropTypes.func,
  onRemoveFilter: PropTypes.func,
  orderDesc: PropTypes.bool,
  pageLength: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  percentMetrics: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ])),
  tableFilter: PropTypes.bool,
  tableTimestampFormat: PropTypes.string,
  timeseriesLimitMetric: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  enableCellClick: PropTypes.bool
};

const formatValue = getNumberFormatter(NumberFormats.INTEGER);
const formatPercent = getNumberFormatter(NumberFormats.PERCENT_3_POINT);
const REMOVE = 'remove';
const ADD = 'add';
function NOOP() { }

function TableVis(element, props) {
  const {
    data,
    height,
    alignPositiveNegative = false,
    colorPositiveNegative = false,
    columns,
    filters = {},
    includeSearch = false,
    metrics: rawMetrics,
    onAddFilter = NOOP,
    onRemoveFilter = NOOP,
    orderDesc,
    pageLength,
    percentMetrics,
    tableFilter,
    tableTimestampFormat,
    timeseriesLimitMetric,
    publishColumns,
    enableCellClick = false,
  } = props;

  const $container = $(element);

  const metrics = (rawMetrics || []).map(m => m.label || m)
    // Add percent metrics
    .concat((percentMetrics || []).map(m => '%' + m))
    // Removing metrics (aggregates) that are strings
    .filter(m => (typeof data[0][m]) === 'number');

  function col(c) {
    const arr = [];
    for (let i = 0; i < data.length; i += 1) {
      arr.push(data[i][c]);
    }
    return arr;
  }
  const maxes = {};
  const mins = {};
  for (let i = 0; i < metrics.length; i += 1) {
    if (alignPositiveNegative) {
      maxes[metrics[i]] = d3.max(col(metrics[i]).map(Math.abs));
    } else {
      maxes[metrics[i]] = d3.max(col(metrics[i]));
      mins[metrics[i]] = d3.min(col(metrics[i]));
    }
  }

  const tsFormatter = getTimeFormatter(tableTimestampFormat);

  const div = d3.select(element);
  div.html('');
  const table = div.append('table')
    .classed(
    'dataframe dataframe table table-striped ' +
    'table-condensed table-hover dataTable no-footer', true)
    .attr('width', '100%');

  function buttoRenderer(label) {
      return `<button type="button" class="btn btn-sm btn-default">${label}</button>`;
  }

  table.append('thead').append('tr')
    .selectAll('th')
    .data(columns.map(c => c.label))
    .enter()
    .append('th')
    .text(d => d);

  table.append('tbody')
    .selectAll('tr')
    .data(data)
    .enter()
    .append('tr')
    .on('click', function (d) {
      if (!enableCellClick && tableFilter) {
        const rowNodeClicked = d3.select(this);
        if(!d3.event.shiftKey){
          resetPublishSelection();
          table.selectAll('.selected-row').classed('selected-row', function () {
            const currentNode = d3.select(this);
            return rowNodeClicked.node() != currentNode.node() ? false : rowNodeClicked.classed('selected-row');
          });
        }
        //publish the row selection
        rowNodeClicked.classed('selected-row') ? publishSelections(REMOVE,d) : publishSelections(ADD,d) ;
        //update the row seletion
        rowNodeClicked.classed('selected-row', !rowNodeClicked.classed('selected-row'));
      }
    })
    .selectAll('td')
    .data(row => columns.map(({ key, format, label, expression }) => {
      let columnName = key;
      const val = row[key];
      let html;
      const isMetric = metrics.indexOf(key) >= 0;
      if (key === '__timestamp' || key === 'show_timestamp') {
        html = tsFormatter(val);
      }
      if (typeof (val) === 'string') {
        html = `<span class="like-pre">${dompurify.sanitize(val)}</span>`;
      }
      if (isMetric) {
        html = getNumberFormatter(format)(val);
      }
      if (key[0] === '%') {
        html = formatPercent(val);
      }
      if (key === '__buttonrenderer') {
        html = buttoRenderer(label);
        columnName = expression;
      }
      return {
        col: columnName,
        val,
        html,
        isMetric,
      };
    }))
    .enter()
    .append('td')
    .style('background-image', function (d) {
      if (d.isMetric) {
        const r = (colorPositiveNegative && d.val < 0) ? 150 : 0;
        if (alignPositiveNegative) {
          const perc = Math.abs(Math.round((d.val / maxes[d.col]) * 100));
          // The 0.01 to 0.001 is a workaround for what appears to be a
          // CSS rendering bug on flat, transparent colors
          return (
            `linear-gradient(to right, rgba(${r},0,0,0.2), rgba(${r},0,0,0.2) ${perc}%, ` +
            `rgba(0,0,0,0.01) ${perc}%, rgba(0,0,0,0.001) 100%)`
          );
        }
        const posExtent = Math.abs(Math.max(maxes[d.col], 0));
        const negExtent = Math.abs(Math.min(mins[d.col], 0));
        const tot = posExtent + negExtent;
        const perc1 = Math.round((Math.min(negExtent + d.val, negExtent) / tot) * 100);
        const perc2 = Math.round((Math.abs(d.val) / tot) * 100);
        // The 0.01 to 0.001 is a workaround for what appears to be a
        // CSS rendering bug on flat, transparent colors
        return (
          `linear-gradient(to right, rgba(0,0,0,0.01), rgba(0,0,0,0.001) ${perc1}%, ` +
          `rgba(${r},0,0,0.2) ${perc1}%, rgba(${r},0,0,0.2) ${perc1 + perc2}%, ` +
          `rgba(0,0,0,0.01) ${perc1 + perc2}%, rgba(0,0,0,0.001) 100%)`
        );
      }
      return null;
    })
    .classed('text-right', d => d.isMetric)
    .attr('title', (d) => {
      if (typeof d.val === 'string') {
        return d.val;
      }
      if (!Number.isNaN(d.val)) {
        return formatValue(d.val);
      }
      return null;
    })
    .attr('data-sort', d => (d.isMetric) ? d.val : null)
    // Check if the dashboard currently has a filter for each row
    .classed('filtered', d =>
      filters &&
      filters[d.col] &&
      filters[d.col].indexOf(d.val) >= 0,
  )
    .on('click', function (d) {
      if (enableCellClick && tableFilter && !d.isMetric) {
        const cellNodeClicked = d3.select(this);

        cellNodeClicked.classed('filtered') ? onRemoveFilter(d.col, [d.val]) : onAddFilter(d.col, [d.val]);
        cellNodeClicked.classed('filtered', !cellNodeClicked.classed('filtered'));
      }
    })
    .style('cursor', tableFilter ?  (d => (!d.isMetric) ? 'pointer' : '') : 'not-allowed')
    .html(d => d.html ? d.html : d.val);

  let publishColumnsKeyValueMap = {}

  const resetPublishSelection = () => {
    publishColumnsKeyValueMap = {}
  }
  const publishSelections = (function (type,data){
    if(tableFilter){
      publishColumns.forEach((column, i, columns) => {
        if(!publishColumnsKeyValueMap[column]){
          publishColumnsKeyValueMap[column] = []
        }
        if(type == REMOVE){
          publishColumnsKeyValueMap[column] = publishColumnsKeyValueMap[column].filter(item => item !== data[column])
        }else {
          publishColumnsKeyValueMap[column] = [...publishColumnsKeyValueMap[column],data[column]]
        }

        onAddFilter(column, publishColumnsKeyValueMap[column], false, (i === columns.length - 1));
      });
    }
  })

  const paging = pageLength && pageLength > 0;

  const datatable = $container.find('.dataTable').DataTable({
    paging,
    pageLength,
    aaSorting: [],
    searching: includeSearch,
    bInfo: false,
    scrollY: `${height}px`,
    scrollCollapse: true,
    scrollX: true,
  });

  fixDataTableBodyHeight($container.find('.dataTables_wrapper'), height);
  // Sorting table by main column
  let sortBy;
  const limitMetric = Array.isArray(timeseriesLimitMetric)
    ? timeseriesLimitMetric[0]
    : timeseriesLimitMetric;
  if (limitMetric) {
    // Sort by as specified
    sortBy = limitMetric.label || limitMetric;
  } else if (metrics.length > 0) {
    // If not specified, use the first metric from the list
    sortBy = metrics[0];
  }
  if (sortBy) {
    const keys = columns.map(c => c.key);
    const index = keys.indexOf(sortBy);
    datatable.column(index).order(orderDesc ? 'desc' : 'asc');
    if (metrics.indexOf(sortBy) < 0) {
      // Hiding the sortBy column if not in the metrics list
      datatable.column(index).visible(false);
    }
  }
  datatable.draw();
}

TableVis.displayName = 'TableVis';
TableVis.propTypes = propTypes;

export default TableVis;
