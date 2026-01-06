import { AuthHeadWrapper } from './../../../../shared/layout/auth-head-wrapper/auth-head-wrapper';
import { Router, RouterLink } from '@angular/router';
import { HlmButtonModule } from './../../../../../ui/ui-button-helm/src/index';
import { HlmCheckboxModule } from './../../../../../ui/ui-checkbox-helm/src/index';
import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { HlmInputModule } from '@spartan-ng/helm/input';
import { HlmLabelModule } from '@spartan-ng/helm/label';
import {
  FormControl,
  ReactiveFormsModule,
  Validators,
  FormGroup,
  NonNullableFormBuilder,
} from '@angular/forms';
import { ErrorService } from '../../../../shared/services/error-service';
import { emailDomain } from '../../../../shared/helper/helper';
import { ToastService } from '../../../../shared/services/toast.service';
import { AppFieldComponent } from '../../../../shared/components/app-field-component';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AUTH_TOKEN } from '../../api/tokens/auth.token';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [
    HlmInputModule,
    AuthHeadWrapper,
    HlmLabelModule,
    HlmCheckboxModule,
    HlmButtonModule,
    RouterLink,
    ReactiveFormsModule,
    AppFieldComponent,
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  private errors = inject(ErrorService);
  private toast = inject(ToastService);
  private authService = inject(AUTH_TOKEN);
  private isFetching = signal(false);
  private router = inject(Router);
  private fb = inject(NonNullableFormBuilder);
  private destroyRef = inject(DestroyRef);
  linkedinPng = computed(() => '/loginPng/linkedin_.png');
  googlePng = computed(() => '/loginPng/google_.png');
  githubPng = computed(() => '/loginPng/github_.png');

  form = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        emailDomain(['gmail.com', 'outlook.com', 'yahoo.com', 'test.com']),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isFetching.set(true);
    const payload = this.form.getRawValue();
    this.authService
      .login(payload)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => this.router.navigateByUrl('/app/dashboard'),
        error: (err) => {
          this.isFetching.set(false);
          console.error('Login failed', err);
        },
        complete: () => {
          this.isFetching.set(false);
          console.log('Login request completed');
        },
      });
  }

  getEmailValidators() {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.invalid &&
      this.form.controls.email.invalid
    );
  }
}
