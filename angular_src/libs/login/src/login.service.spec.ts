import { HttpParams } from '@angular/common/http';
import {
  inject,
  TestBed
} from '@angular/core/testing';
import { AuthUtils } from '@guavus/ui-kit-auth';
import {
  appConfig,
  ProjectConfig,
  OAUTH_LOGIN_PAGE_ENABLED,
  UrlBuilder
} from '@dd/common';
import { LoginService } from './login.service';

describe('LoginService', () => {
  const router = jasmine.createSpyObj('router', ['navigate']);
  const projectConfig: ProjectConfig = {
    appName: 'app',
    urls: {
      auth: '/'
    },
    "contextRoot": "/",
  };

  const urlBuilder: UrlBuilder = new UrlBuilder(projectConfig);

  const service: LoginService = new LoginService(router, undefined, undefined, urlBuilder);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService]
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should route to "/login"', () => {
    (OAUTH_LOGIN_PAGE_ENABLED as any) = false;

    service.navigateToLogin('/');
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should route to oauth login page', () => {
    spyOn(window, 'open');
    appConfig.auth_info = {};
    appConfig.auth_info.client_id = 'wubba_lubba_dub_dub';

    (OAUTH_LOGIN_PAGE_ENABLED as any) = true;

    const oauthBaseUrl = '/'
    const redirectUrl = '/'
    service.navigateToLogin(oauthBaseUrl);

    const oauthLoginUrl = AuthUtils.modifyAPIName(oauthBaseUrl, ['login', 'authorize']);
    const queryParams: HttpParams = new HttpParams()
      .set('response_type', 'token')
      .set('client_id', appConfig.auth_info.client_id)
      .set('redirect_uri', redirectUrl);

    expect(window.open).toHaveBeenCalledWith(`${oauthLoginUrl}?${queryParams.toString()}`, '_self');
  });
});
