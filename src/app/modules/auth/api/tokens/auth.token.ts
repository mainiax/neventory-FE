import { InjectionToken } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const AUTH_TOKEN = new InjectionToken<AuthService>('AUTH_TOKEN');
