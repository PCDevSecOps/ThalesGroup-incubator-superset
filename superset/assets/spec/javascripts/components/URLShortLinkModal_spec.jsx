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
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import URLShortLinkModal from '../../../src/components/URLShortLinkModal';
import ModalTrigger from '../../../src/components/ModalTrigger';

describe('URLShortLinkModal', () => {
  const defaultProps = {
    url: 'mockURL',
    origin: 'http://mock-remote/',
    emailSubject: 'Mock Subject',
    emailContent: 'mock content',
  };

  function setup() {
    const mockStore = configureStore([]);
    const store = mockStore({});
    return shallow(<URLShortLinkModal {...defaultProps} />, { context: { store } }).dive();
  }

  it('renders ModalTrigger', () => {
    const wrapper = setup();
    expect(wrapper.find(ModalTrigger)).toHaveLength(1);
  });

  it('prepend origin to short-url', () => {
    const wrapper = setup();
    const inst = wrapper.instance();
    inst.onShortUrlSuccess('/my-mock-url');
    expect(wrapper.state().shortUrl).toEqual(defaultProps.origin+'/my-mock-url');
  })
});
