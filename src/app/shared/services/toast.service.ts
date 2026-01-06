// shared/services/toast.service.ts
import { Injectable, inject } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { toast } from 'ngx-sonner';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private router = inject(Router);

  constructor() {
    // Clear all active toasts whenever the route changes (like your PrimeNG version)
    this.router.events
      .pipe(filter((e) => e instanceof NavigationStart))
      .subscribe(() => toast.dismiss()); // dismiss everything
  }

  success(detail: string, summary = 'Success', life = 4000) {
    toast.success(summary, { description: detail, duration: life });
  }
  info(detail: string, summary = 'Info', life = 4000) {
    toast.info(summary, { description: detail, duration: life });
  }
  warn(detail: string, summary = 'Warning', life = 4000) {
    // sonner uses "warning" (not "warn")
    toast.warning(summary, { description: detail, duration: life });
  }
  error(detail: string, summary = 'Error', life = 5000) {
    toast.error(summary, { description: detail, duration: life });
  }

  // Advanced: action button like your Undo example
  action(label: string, onClick: () => void, title = '', detail = '', life = 4000) {
    toast(title || detail || 'Notice', {
      description: detail || undefined,
      action: { label, onClick },
      duration: life,
    });
  }

  // If you ever need programmatic control:
  // const id = toast('msg'); toast.dismiss(id) or toast.dismiss() for all
}
