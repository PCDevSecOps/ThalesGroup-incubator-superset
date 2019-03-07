import { RouterModule, Routes } from '@angular/router';
import { OAUTH_LOGIN_PAGE_ENABLED } from '@dd/common';
import { LandingPageRoutes } from './landing-page/landing-page.routes';

const routes: Routes = [
  ...LandingPageRoutes,
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  {path: '**' , redirectTo: 'app'}
];

const loginRoutes: Routes = [
  {
    path: 'login',
    loadChildren: '@dd/login-routing#LoginRoutingModule'
  },
  ...routes
];



export const applicationRoutes = (OAUTH_LOGIN_PAGE_ENABLED) ? routes : loginRoutes;
