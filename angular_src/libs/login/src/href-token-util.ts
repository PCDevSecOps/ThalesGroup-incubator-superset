import { HttpParams } from '@angular/common/http';
import { isNil } from 'lodash';

export const ACCESS_TOKEN = 'access_token';

export function getTokenFromHref(href: string): string | null {
  let token: string = null;
  const params: HttpParams = toHttpParam(href);

  params.keys().forEach(key => {
    if (key.includes(ACCESS_TOKEN)) {
      token = params.get(key);
    }
  });

  return token;
}

/**
 * Extracts query parameters from the url.
 * @param url url with token in it.
 */
function toHttpParam(url: string): HttpParams {
  // Regex to seprate out the query params.
  // In case the url is http://localhost:8080/dd#access_token=<token-string> then is
  // Creates a query params with value as Token and key as "dd#access_token"
  const regex = url.match(/[a-zA-Z0-9_]/);

  return new HttpParams({
    fromString: (!isNil(regex)) ? url.substring(regex.index) : url,
  });
}
