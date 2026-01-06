import { Component, inject } from '@angular/core';
import { AUTH_TOKEN } from '../../../modules/auth/api/tokens/auth.token';
import { SIDEBAR_ROUTES } from '../../../core/routes/sidebar.routes';

@Component({
  selector: 'app-sidebar-component',
  imports: [],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.css',
})
export class SidebarComponent {
  private auth = inject(AUTH_TOKEN);

  items = SIDEBAR_ROUTES;
}
