import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RegisterPayload } from '../../../../shared/helper/registerPayload';
import { LoginPayload } from '../../../../shared/helper/loginPayload';
import { tap } from 'rxjs';
import { AuthResponse } from '../../../../shared/helper/authResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private readonly TOKEN_KEY = 'access_token';
  login(payload: LoginPayload) {
    return this.http
      .post<AuthResponse>('http://localhost:9090/api/auth/login', {
        email: payload.email,
        password: payload.password,
      })
      .pipe(
        tap((res) => {
          localStorage.setItem(this.TOKEN_KEY, res.accessToken);
        }),
      );
  }
  async logout() {
    /* ... */
    localStorage.removeItem(this.TOKEN_KEY);
  }
  register(payload: RegisterPayload) {
    return this.http.post<void>('http://localhost:9090/api/auth/register', payload);
  }
  async currentUser() {
    /* ... */ return null;
  }

  isLoggedIn(): boolean {
    // Implement your logic to check if the user is logged in
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
}
