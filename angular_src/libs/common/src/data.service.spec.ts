import { HttpEvent } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import {
  async,
  inject,
  TestBed
} from '@angular/core/testing';
import { EndPointConfig } from './endpoint-config';
import { DataService } from './data.service';

const GET_USER_COUNT_API =  'getUsersCount';
describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
  });

  it('should be created', inject([DataService],
    (dataService: DataService) => {
      expect(dataService).toBeTruthy();
    }));

  it('should execute request', async(inject(
    [HttpTestingController, DataService],
    (
      httpMock: HttpTestingController,
      dataService: DataService
    ) => {
      const mockResponse = { count: 101 };
      const mockEndPointConfig: EndPointConfig = {
        method: 'GET',
        apiName: GET_USER_COUNT_API,
        baseUrl: '/',
        headers: {
          'content-type': 'application/json'
        }
      };

      const mockRequestConfig = {url:"/"+GET_USER_COUNT_API, headers: {}, payload:""};
      const mockResponseType: HTTPResponseType = { type: 'json' };

      dataService.executeRequest(mockEndPointConfig.method, mockRequestConfig, mockResponseType).subscribe((event: HttpEvent<any>) => {
        expect(event['count']).toEqual(mockResponse.count);
      });

      const mockReq = httpMock.expectOne('/'+GET_USER_COUNT_API);

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual(mockResponseType.type);
      expect(mockReq.request.body).toEqual(null);
      expect(mockReq.request.method).toEqual('GET');
      expect(mockReq.request.url).toEqual('/'+GET_USER_COUNT_API);
      mockReq.flush(mockResponse);
      // To do failure check
      httpMock.verify();
    }
  )
  ));
});
