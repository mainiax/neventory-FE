import { Component, computed, inject } from '@angular/core';
import { AUTH_TOKEN } from '../../../modules/auth/api/tokens/auth.token';
import { SIDEBAR_ROUTES } from '../../../core/routes/sidebar.routes';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { NgIcon } from '@ng-icons/core';
import { HlmAvatar } from '@spartan-ng/helm/avatar';
import { logoutItem, menuGroups } from '../../helper/dropDownItemsList';
import { HlmDropdownMenu, HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
@Component({
  selector: 'app-sidebar-component',
  imports: [HlmSidebarImports, NgIcon, HlmAvatar, HlmDropdownMenuImports],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.css',
})
export class SidebarComponent {
  accountMenuItems: any[] = menuGroups;
  logoutMenuItem = logoutItem;
  private auth = inject(AUTH_TOKEN);
  neventoryPng = computed(() => '/loginPng/_Logo-removebg-preview.png');
  _items = SIDEBAR_ROUTES;

  onMenuSelect(action: string) {
    switch (action) {
      case 'profile':
        console.log('Go to profile');
        break;

      case 'billing':
        console.log('Go to billing');
        break;

      case 'settings':
        console.log('Go to settings');
        break;

      case 'support':
        console.log('Open support');
        break;

      case 'logout':
        console.log('Logging out...');
        break;
    }
  }
}
