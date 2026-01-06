// src/app/shared/validation/messages.ts
export type ErrorMessages = Record<string, string | ((error: any, label?: string) => string)>;

export const defaultMessages: ErrorMessages = {
  required: (e, label = 'This field') => `${label} is required.`,
  email: () => `Enter a valid email address.`,
  minlength: (e: { requiredLength: number }) => `Must be at least ${e.requiredLength} characters.`,
  emailDomain: (e: { allowed?: string[]; reason?: string }) =>
    e?.reason === 'missingDomain'
      ? `Email must include a domain like @gmail.com.`
      : `Email domain not allowed. Try: ${(e?.allowed ?? []).join(', ')}`,
  passwordStrength: (e: any) => {
    const missing: string[] = [];
    if (!e?.hasUpper) missing.push('uppercase');
    if (!e?.hasLower) missing.push('lowercase');
    if (!e?.hasDigit) missing.push('number');
    if (!e?.hasSpecial) missing.push('special char');
    if (!e?.longEnough) missing.push('8+ chars');
    return `Password needs: ${missing.join(', ')}.`;
  },
};
