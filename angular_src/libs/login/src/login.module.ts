import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  AuthEffects,
  AuthModule,
  AuthService
  } from '@guavus/ui-kit-auth';
import { AuthReducer } from '@guavus/ui-kit-auth';
import { AuthTokenService } from '@guavus/ui-kit-auth-interceptor';
import {
  EndPointConfig,
  ProjectConfig
  } from '@dd/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ActionReducerMap } from '@ngrx/store/src/models';
import { ConfigResolver } from './config-resolver';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginService } from './login.service';
import { CHANGE_PASSWORD_REQUEST } from './service-configs';

import { loginInitialState } from './+state/login.init';
import { LoginState, Login } from './+state/login.interfaces';
export function noopReducer(state, action) {
  return state;
}
export const reducers: ActionReducerMap<LoginState> = {
  login: noopReducer,
  auth: AuthReducer
};
@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    StoreModule.forFeature('login', reducers, { initialState: loginInitialState }),
    EffectsModule.forFeature([AuthEffects])
  ],
  exports: [AuthModule],
  providers: [
    // Auth module
    AuthTokenService,
    AuthService,
    LoginService,
    ConfigResolver
  ],
  declarations: [LoginPageComponent]
})
export class LoginModule { }

