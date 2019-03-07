import { Injectable } from '@angular/core';
import { DataService } from '@dd/common';
import { RequestConfig } from '@guavus/ui-kit-auth';

@Injectable()
export class UserCountServcie {
  constructor(private dataService: DataService) {

  }

  fetch(method: string,requestConfig:RequestConfig) {
    const responseType: HTTPResponseType = { type: 'json' };
    return this.dataService.executeRequest(method,requestConfig ,responseType, {});
  }
}
