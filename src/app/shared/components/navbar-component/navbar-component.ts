import { Component, inject } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { HlmBreadCrumbImports } from '@spartan-ng/helm/breadcrumb';
import { BreadCrumbComponent } from '../bread-crumb-component/bread-crumb-component';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';

import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { logoutItem, menuGroups } from '../../helper/dropDownItemsList';
import { HlmSidebar, HlmSidebarService, HlmSidebarTrigger } from '@spartan-ng/helm/sidebar';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-navbar-component',
  imports: [
    BreadCrumbComponent,
    BreadCrumbComponent,
    HlmAvatarImports,
    HlmDropdownMenuImports,
    NgIcon,
  ],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {
  accountMenuItems: any[] = menuGroups;
  logoutMenuItem = logoutItem;
  isDark = false;
  sideBarService = inject(HlmSidebarService);
  ngOnInit() {
    this.isDark = document.documentElement.classList.contains('dark');
  }
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
  onToggleSidebar() {
    this.sideBarService.toggleSidebar();
  }
  toggleTheme() {
    const root = document.documentElement;
    root.classList.toggle('dark');
    this.isDark = root.classList.contains('dark');
    localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
  }
}
