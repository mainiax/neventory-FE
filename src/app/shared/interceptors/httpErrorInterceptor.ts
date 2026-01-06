import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ErrorService } from '../services/error-service';
import { ToastService } from '../services/toast.service';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService = inject(ErrorService);
  const toastService = inject(ToastService);

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      // Backend error payload (your JSON)
      const apiError = err.error;

      const message = apiError?.message || err.message || 'Something went wrong. Please try again.';

      // 1. Store error globally if needed
      errorService.setError(message);

      // 2. Show toast
      toastService.error(message);

      // 3. Re-throw so component logic still works
      return throwError(() => err);
    }),
  );
};
