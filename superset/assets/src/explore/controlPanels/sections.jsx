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
import React from 'react';
import { t } from '@superset-ui/translation';

export const druidTimeSeries = {
  label: t('Time'),
  expanded: true,
  description: t('Time related form attributes'),
  controlSetRows: [
    ['granularity', 'druid_time_origin'],
    ['time_range'],
  ],
};

export const datasourceAndVizType = {
  label: t('Datasource & Chart Type'),
  expanded: true,
  controlSetRows: [
    ['datasource'],
    ['viz_type'],
    ['slice_id', 'cache_timeout', 'url_params'],
  ],
};

export const linkedSlices = {
  label: t('Publication'),
  expanded: true,
  controlSetRows: [
    ['publish_columns'],
    ['linked_slice'],
    ['rest_actions'],
  ],
};

export const colorScheme = {
  label: t('Color Scheme'),
  controlSetRows: [
    ['color_scheme'],
  ],
};

export const sqlaTimeSeries = {
  label: t('Time'),
  description: t('Time related form attributes'),
  expanded: true,
  controlSetRows: [
    ['granularity_sqla', 'time_grain_sqla'],
    ['time_range'],
    ['query_with_partitions'],
  ],
};

export const filters = {
  label: t('Filters'),
  expanded: true,
  controlSetRows: [
    ['filters'],
  ],
};

export const annotations = {
  label: t('Annotations and Layers'),
  expanded: true,
  controlSetRows: [
    ['annotation_layers'],
  ],
};

export const subscribers = {
  label: t('Subscription'),
  expanded: true,
  controlSetRows: [
    ['subscriber_layers'],
  ],
};

export const actions = {
  label: t('Actions'),
  expanded: true,
  controlSetRows: [
    [<h1 className="section-header">{t('Navigate to Dashboard')}</h1>],
    ['navigate_to_dash_link_name', 'navigate_to_dashboards'],
    ['passing_filter_to_dasboard'],
    [<h1 className="section-header">{t('Raise Ticket')}</h1>],
    ['raise_ticket_action'],
    ['raise_ticket_action_payload'],
    ['raise_ticket_action_message'],

  ],
};

export const advancedOptions = {
  label: t('Advanced Options'),
  expanded: true,
  controlSetRows: [
    ['chart_header'],
  ],
};

export const NVD3TimeSeries = [
  {
    label: t('Query'),
    expanded: true,
    controlSetRows: [
      ['metrics'],
      ['adhoc_filters'],
      ['groupby'],
      ['limit', 'timeseries_limit_metric'],
      ['order_desc', 'contribution'],
      ['row_limit', null],
    ],
  },
  {
    label: t('Advanced Analytics'),
    description: t('This section contains options ' +
      'that allow for advanced analytical post processing ' +
      'of query results'),
    controlSetRows: [
      [<h1 className="section-header">{t('Moving Average')}</h1>],
      ['rolling_type', 'rolling_periods', 'min_periods'],
      [<h1 className="section-header">{t('Time Comparison')}</h1>],
      ['time_compare', 'comparison_type'],
      [<h1 className="section-header">{t('Python Functions')}</h1>],
      [<h2 className="section-header">pandas.resample</h2>],
      ['resample_how', 'resample_rule', 'resample_fillmethod'],
    ],
  },
];
