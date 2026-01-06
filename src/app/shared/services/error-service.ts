import { Injectable, signal } from '@angular/core';
import { toast } from 'ngx-sonner';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private _error = signal<string>('');

  error = this._error.asReadonly();
  constructor() {
    console.log('ErrorService initialized');
  }

  setError(message: string) {
    this._error.set(message);
  }

  clearError() {
    this._error.set('');
  }

  showToast() {
    toast('Event has been created', {
      description: 'Sunday, December 03, 2023 at 9:00 AM',
      action: {
        label: 'Undo',
        onClick: () => console.log('Undo'),
      },
    });
  }
}
