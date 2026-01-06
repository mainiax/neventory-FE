import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';
import { routes } from './core/routes/app.routes';
import { AuthService } from './modules/auth/api/services/auth.service';
import { AUTH_TOKEN } from './modules/auth/api/tokens/auth.token';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { httpErrorInterceptor } from './shared/interceptors/httpErrorInterceptor';
import { provideIcons } from '@ng-icons/core';
import {
  lucideCircleHelp,
  lucideCirclePlus,
  lucideCircleUser,
  lucideCode,
  lucideCog,
  lucideGithub,
  lucideKeyboard,
  lucideLayers,
  lucideLogOut,
  lucideMail,
  lucideMessageSquare,
  lucidePlus,
  lucideSlash,
  lucideSmile,
  lucideUser,
} from '@ng-icons/lucide';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: AUTH_TOKEN, useExisting: AuthService },
    provideHttpClient(withInterceptors([httpErrorInterceptor])),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      //  withDebugTracing()
    ),
    provideIcons({
      lucideSlash,
      lucideUser,
      lucideLayers,
      lucideCog,
      lucideKeyboard,
      lucideCircleUser,
      lucideSmile,
      lucidePlus,
      lucideGithub,
      lucideCircleHelp,
      lucideCode,
      lucideLogOut,
      lucideMail,
      lucideMessageSquare,
      lucideCirclePlus,
    }),

    provideAnimationsAsync(),
  ],
};
