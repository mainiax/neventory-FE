import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { HlmBreadCrumbImports } from '@spartan-ng/helm/breadcrumb';
import { BreadCrumbComponent } from '../bread-crumb-component/bread-crumb-component';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';

import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
@Component({
  selector: 'app-navbar-component',
  imports: [BreadCrumbComponent, BreadCrumbComponent, HlmAvatarImports, HlmDropdownMenuImports],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {}
