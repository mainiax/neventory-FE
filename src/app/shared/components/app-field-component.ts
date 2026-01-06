import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  InputSignal,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { HlmInputModule } from '@spartan-ng/helm/input';
import { merge, Subscription } from 'rxjs';

@Component({
  selector: 'app-app-field-component',
  imports: [HlmInputModule, ReactiveFormsModule, CommonModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app-field-component.html',
  styleUrl: './app-field-component.css',
})
export class AppFieldComponent {
  // ✅ All inputs are signals now
  label = input<string>();
  hint = input<string>();
  type = input<'text' | 'email' | 'password' | 'number' | 'search'>('text');
  name = input<string>();
  placeholder = input<string>();
  autocomplete = input<string>();
  disabled = input<boolean>(false);
  control = input<AbstractControl | null>(null);

  private tick = signal(0);
  private sub?: Subscription;
  ngOnChanges() {
    // (Re)subscribe whenever the `control` input itself changes
    this.sub?.unsubscribe();
    const c = this.control();
    if (c) {
      this.sub = merge(c.valueChanges, c.statusChanges).subscribe(() =>
        this.tick.update((x) => x + 1),
      );
    }
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  // ✅ Derived signals
  showError = computed(() => {
    this.tick(); // depend on tick to update when control changes
    const c = this.control();
    return !!c && (c.touched || c.dirty) && c.invalid;
  });

  errorText = computed(() => {
    this.tick(); // track control updates

    const c = this.control();
    if (!c?.errors) return '';
    const firstKey = Object.keys(c.errors)[0];
    const err = (c.errors as any)[firstKey];
    switch (firstKey) {
      case 'required':
        return `${this.label() ?? 'Field'} is required`;
      case 'email':
        return `Enter a valid email`;
      case 'minlength':
        return `Minimum ${err.requiredLength} characters`;
      default:
        return `${this.label() ?? 'Field'} is invalid`;
    }
  });

  onInput(val: string) {
    this.control()?.setValue(val);
    this.control()?.markAsDirty();
    this.control()?.updateValueAndValidity({ emitEvent: true });
  }
}
