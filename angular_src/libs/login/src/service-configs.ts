import { EndPointConfig } from '@dd/common';
export const CHANGE_PASSWORD_REQUEST: EndPointConfig = {
  method: 'POST',
  apiName: 'users',
  urlId: 'um',
  headers: {
    'content-type': 'application/json'
  }
};
export const VALIDATE_SESSION_REQUEST: EndPointConfig = {
  method: 'POST',
  apiName: 'checkToken',
  urlId: 'auth',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'generate-error': 'true',
    'show-popup': 'false',
    'use-file': 'false'
  }
};

export const LOGOUT_REQUEST: EndPointConfig = {
  method: 'GET',
  apiName: 'logout',
  urlId: 'auth',
  headers: {
    'content-type': 'application/json'
  }
};

export const LOGIN_REQUEST: EndPointConfig = {
  method: 'POST',
  apiName: 'createToken',
  urlId: 'auth',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'show-popup': 'false',
  }
};

export const OAUTH_LOGIN_REQUEST: EndPointConfig = {
  method: 'POST',
  apiName: 'login/authorize',
  urlId: 'auth',
};
