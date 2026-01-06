// src/app/shared/validators/password-strength.ts
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordStrength(): ValidatorFn {
  return (c: AbstractControl): ValidationErrors | null => {
    const v = (c.value ?? '') as string;
    if (!v) return null; // let required handle empties
    const e = {
      hasUpper: /[A-Z]/.test(v),
      hasLower: /[a-z]/.test(v),
      hasDigit: /[0-9]/.test(v),
      hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(v),
      longEnough: v.length >= 8,
    };
    const ok = e.hasUpper && e.hasLower && e.hasDigit && e.hasSpecial && e.longEnough;
    return ok ? null : { passwordStrength: e };
  };
}
