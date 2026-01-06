import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailDomain(allow: string[]): ValidatorFn {
  const set = new Set(allow.map((d) => d.toLowerCase()));
  return (c: AbstractControl): ValidationErrors | null => {
    const v = (c.value ?? '') as string;
    if (!v) return null; // let required handle empties
    const at = v.indexOf('@');
    if (at < 0) return { email: true };
    const domain = v.slice(at + 1).toLowerCase();
    return set.has(domain) ? null : { emailDomain: { allowed: [...set], actual: domain } };
  };
}
