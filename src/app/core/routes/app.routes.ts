import { CanMatchFn, Router, Routes } from '@angular/router';
import { AUTH_TOKEN } from '../../modules/auth/api/tokens/auth.token';
import { inject } from '@angular/core';
import { AppShell } from '../../app-shell';
import { _authRequired } from '../guards/auth-required.guard';
import { AppShellRoutes } from './app-shell.routes';

const _redirectIfAuthed: CanMatchFn = () => {
  const router = inject(Router);
  const auth = inject(AUTH_TOKEN);
  return auth.isLoggedIn() ? router.parseUrl('/home') : true;
};

export const routes: Routes = [
  //default route to got /auth if not authed
  // Default redirect (no canMatch here!)
  { path: '', pathMatch: 'full', redirectTo: 'auth/login' },

  // ---------- AUTH AREA (Login/Sign-up first) ----------
  {
    path: 'auth',
    // canMatch: [redirectIfAuthed], // blocks auth pages if already logged in
    loadChildren: () => import('./auth.routes').then((m) => m.AUTH_ROUTES),
  },
  ...AppShellRoutes,

  { path: '**', redirectTo: 'auth/login' },
];
