import { EndPointConfig } from '@dd/common';
import { UserCountServcie } from './user-count.service';
import { RequestConfig } from '@guavus/ui-kit-auth';

describe('UserCountServcie', () => {
  let userCountServcie;
  const service = jasmine.createSpyObj('DataService', ['executeRequest']);
  beforeEach(() => {
    userCountServcie = new UserCountServcie(service);
  });

  it('#getUsersCount', () => {
    const mockEndPointConfig: EndPointConfig = {
      method: 'GET',
      apiName: 'getUsersCount',
      baseUrl: '/',
      headers: {
        'content-type': 'application/json'
      }
    };

    const mockRequestConfig: RequestConfig = {url:"", headers: {}, payload:""};

    const mockResponseType: HTTPResponseType = { type: 'json' };
    expect(userCountServcie).toBeTruthy();
    userCountServcie.fetch(mockEndPointConfig.method,mockRequestConfig);
    expect(service.executeRequest).toHaveBeenCalledWith(mockEndPointConfig.method,mockRequestConfig, mockResponseType, {})
  });
});
