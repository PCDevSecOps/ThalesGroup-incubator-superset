import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
  } from '@angular/router';
import { appConfig } from '@dd/common';
import { LoginService } from '@dd/login';
import { isNil } from 'lodash';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private router: Router, private service: LoginService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.authenticate$(route, state);
  }

  private authenticate$(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const isAutenticated = this.service.isAuthenticated();
    if (isAutenticated) {
      return true;
    }
    const isAuthenticated$: Observable<boolean> = this.service.authenticate$(state.url, appConfig.auth_info);
    isAuthenticated$.subscribe(value => {
      if (value === false) this.service.navigateToLogin(document.baseURI);
    });
    return isAuthenticated$;
  }
}
