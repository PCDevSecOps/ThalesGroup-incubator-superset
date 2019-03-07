import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { HttpObserve } from '@angular/common/http/src/client';
import {
  Injectable
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestConfig } from '@guavus/ui-kit-auth';

export const HTTP_OBSERVE_TYPE: HttpObserve = 'body';
@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  executeRequest(method: string, config:RequestConfig, responseType: HTTPResponseType, body?: any): Observable<any> {
    const httpHeaders: HttpHeaders = config.headers ? new HttpHeaders(config.headers) : undefined;
    const url: string = config.url;

    return this.http.request(method, url, {
      headers: httpHeaders,
      body: body,
      observe: HTTP_OBSERVE_TYPE,
      responseType: responseType.type
    });
  }
}
