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
  lucideAccessibility,
  lucideBell,
  lucideChartBar,
  lucideChevronUp,
  lucideCircleHelp,
  lucideCirclePlus,
  lucideCircleUser,
  lucideCode,
  lucideCog,
  lucideDatabase,
  lucideGithub,
  lucideKeyboard,
  lucideLayers,
  lucideLayoutDashboard,
  lucideLogOut,
  lucideMail,
  lucideMessageSquare,
  lucideMoon,
  lucidePackage,
  lucidePlus,
  lucideSettings,
  lucideSlash,
  lucideSmile,
  lucideSun,
  lucideUser,
} from '@ng-icons/lucide';
import { provideHlmSidebarConfig } from '@spartan-ng/helm/sidebar';
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
    provideHlmSidebarConfig({
      sidebarWidth: '12rem',
      sidebarWidthMobile: '18rem',
      sidebarWidthIcon: '3rem',
      sidebarCookieName: 'sidebar_state',
      sidebarCookieMaxAge: 60 * 60 * 24 * 7,
      sidebarKeyboardShortcut: 'b',
      mobileBreakpoint: '768px',
    }),
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
      lucideBell,
      lucideMoon,
      lucideSun,
      lucideLayoutDashboard,
      lucidePackage,
      lucideDatabase,
      lucideChartBar,
      lucideSettings,
      lucideAccessibility,
      lucideChevronUp,
    }),

    provideAnimationsAsync(),
  ],
};
