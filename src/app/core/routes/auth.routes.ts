import { SignUp } from './../../modules/auth/pages/sign-up/sign-up';
import { Route as _Route, Routes } from '@angular/router';
import { Layout } from '../../modules/auth/pages/layout';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      {
        path: 'login',
        loadComponent: () => import('../../modules/auth/pages/login/login').then((m) => m.Login),
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import('../../modules/auth/pages/sign-up/sign-up').then((m) => m.SignUp),
      },
    ],
  },
];
