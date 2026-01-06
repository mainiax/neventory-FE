import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { Router, RouterLink } from '@angular/router';
import { HlmButtonImports } from './../../../../../ui/ui-button-helm/src/index';
import { HlmCheckboxImports } from './../../../../../ui/ui-checkbox-helm/src/index';

import { AuthHeadWrapper } from './../../../../shared/layout/auth-head-wrapper/auth-head-wrapper';
import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AppFieldComponent } from '../../../../shared/components/app-field-component';
import { emailDomain } from '../../../../shared/helper/helper';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AUTH_TOKEN } from '../../api/tokens/auth.token';

@Component({
  selector: 'app-sign-up',
  imports: [
    HlmInputImports,
    RouterLink,
    AuthHeadWrapper,
    HlmLabelImports,
    HlmCheckboxImports,
    HlmButtonImports,
    AppFieldComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  linkedinPng = computed(() => '/loginPng/linkedin_.png');
  googlePng = computed(() => '/loginPng/google_.png');
  githubPng = computed(() => '/loginPng/github_.png');

  private authService = inject(AUTH_TOKEN);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  private nfbForm = inject(NonNullableFormBuilder);
  isFetching = signal(false);
  form = this.nfbForm.group({
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        emailDomain(['gmail.com', 'outlook.com', 'yahoo.com', 'test.com']),
      ],
    ],
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
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
      .register(payload)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => this.router.navigate(['/auth/login']),
        error: (err) => {
          this.isFetching.set(false);
          console.error('Registration failed', err);
        },
        complete: () => {
          this.isFetching.set(false);
          console.log('Registration request completed');
        },
      });
  }
}
