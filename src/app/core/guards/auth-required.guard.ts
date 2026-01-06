import { CanMatchFn, Router, Routes } from '@angular/router';
import { AUTH_TOKEN } from '../../modules/auth/api/tokens/auth.token';
import { inject } from '@angular/core';

export const _authRequired: CanMatchFn = () => {
  const router = inject(Router);
  const auth = inject(AUTH_TOKEN);
  return auth.isLoggedIn() ? true : router.parseUrl('/auth/login');
};
