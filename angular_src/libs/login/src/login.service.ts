import { HttpParams } from '@angular/common/http';
import {
  Injectable,
  Optional
  } from '@angular/core';
import { Router } from '@angular/router';
import {
  AuthClientInfo,
  Authenticate,
  UserStatus
  } from '@guavus/ui-kit-auth';
import { AuthTokenService } from '@guavus/ui-kit-auth-interceptor';
import {
  appConfig,
  getRequestConfig,
  OAUTH_LOGIN_PAGE_ENABLED,
  UrlBuilder
  } from '@dd/common';
import { Store } from '@ngrx/store';
import { isNil } from 'lodash';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { getTokenFromHref } from './href-token-util';
import {
  OAUTH_LOGIN_REQUEST,
  VALIDATE_SESSION_REQUEST
  } from './service-configs';
import { LoginState } from './+state/login.interfaces';
import { selectAuthStatus } from './+state/selectors';

@Injectable()
export class LoginService {
  constructor(private router: Router, private store: Store<{ login: LoginState }>, private tokenService: AuthTokenService, @Optional() private urlbuilder: UrlBuilder) { }

  isAuthenticated(): boolean {
    let isAutenenticated: boolean;
    this.store
      .select(selectAuthStatus)
      .map(status => status === UserStatus.AUTHENTICATED)
      .first()
      .subscribe(status => (isAutenenticated = status));
    return isAutenenticated;
  }
  authenticate$(href: string, clientDetails: AuthClientInfo): Observable<boolean> {

    // In case application is redirected from Oauth's login page, extract
    // the token from url.
    const token = getTokenFromHref(href);
    if (!isNil(token)) {
      this.storeToken(token);
      // After redirection from oauth page, url contains access token as well as other
      // user details. So once token is saved routing the app to '/dd/' to make
      // the url neet and clean.
      this.router.navigate(['/app'], { skipLocationChange: false });
    }

    this.store.dispatch(new Authenticate(getRequestConfig(VALIDATE_SESSION_REQUEST, this.urlbuilder), clientDetails));

    return this.store
      .select(selectAuthStatus)
      .filter(status => status !== UserStatus.PROCESSING)
      .map(status => status === UserStatus.AUTHENTICATED);
  }

  storeToken(token: string): void {
    this.tokenService.setToken(token);
  }

  /**PP
   * Navigates to oauth's login page.
   */
  navigateToLogin(redirectUrl): void {
    if (OAUTH_LOGIN_PAGE_ENABLED) {
      const oauthLoginUrl = this.urlbuilder.getUrl(OAUTH_LOGIN_REQUEST);
      const queryParams: HttpParams = new HttpParams()
        .set('response_type', 'token')
        .set('client_id', appConfig.auth_info.client_id)
        .set('redirect_uri', redirectUrl);

      window.open(`${oauthLoginUrl}?${queryParams.toString()}`, '_self');
    }
    else {
      this.router.navigate(['/login']);
    }
  }
}
