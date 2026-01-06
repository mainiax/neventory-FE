import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { SIDEBAR_ROUTES, SidebarRoute } from '../../../core/routes/sidebar.routes';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmBreadCrumbImports } from '@spartan-ng/helm/breadcrumb';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bread-crumb-component',
  imports: [NgIcon, HlmBreadCrumbImports, RouterLink],
  templateUrl: './bread-crumb-component.html',
  styleUrl: './bread-crumb-component.css',
})
export class BreadCrumbComponent {
  breadcrumbs: { label: string; url: string }[] = [];

  constructor(private router: Router) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.updateBreadcrumbs();
    });

    this.updateBreadcrumbs();
  }

  private updateBreadcrumbs() {
    const url = this.router.url.split('?')[0];

    const crumbs = this.buildBreadcrumbs(SIDEBAR_ROUTES, url);

    this.breadcrumbs = crumbs ?? [{ label: 'Dashboard', url: '/app/dashboard' }];
  }

  private buildBreadcrumbs(
    routes: SidebarRoute[],
    url: string,
  ): { label: string; url: string }[] | null {
    for (const route of routes) {
      const routePath = route.path;

      if (url === routePath) {
        return [{ label: route.label, url: routePath }];
      }

      if (route.children) {
        const childResult = this.buildBreadcrumbs(route.children, url);
        if (childResult) {
          return [{ label: route.label, url: routePath }, ...childResult];
        }
      }
    }

    return null;
  }
}
