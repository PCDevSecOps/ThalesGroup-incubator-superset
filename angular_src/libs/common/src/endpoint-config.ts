type HttpMethod = 'DELETE' | 'GET' | 'HEAD' | 'JSONP' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH';
export interface EndPointConfig {
    id?: string;
    baseUrl?: string;
    contextRoot?: string;
    method?: HttpMethod;
    apiName?: string;
    request?: any;
    serviceRoot?: string;
    urlId?: any;
    [key: string]: any;
}
