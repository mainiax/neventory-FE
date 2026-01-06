import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HlmButtonModule } from '@spartan-ng/helm/button';
import { HlmToasterImports } from '@spartan-ng/helm/sonner';
import { ErrorService } from './shared/services/error-service';
import { provideHttpClient } from '@angular/common/http';
import { AUTH_TOKEN } from './modules/auth/api/tokens/auth.token';
import { AuthService } from './modules/auth/api/services/auth.service';
import { SidebarComponent } from './shared/components/sidebar-component/sidebar-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HlmToasterImports, HlmButtonModule],
  templateUrl: './app.html',
  providers: [],
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('NeventoryFrontEnd');

  private errorService = inject(ErrorService);

  showToast() {
    this.errorService.showToast();
  }

  ngOnInit() {}
}
