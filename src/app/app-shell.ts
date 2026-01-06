import { Component } from '@angular/core';
import { SidebarComponent } from './shared/components/sidebar-component/sidebar-component';
import { HlmButtonModule } from '@spartan-ng/helm/button';
import { HlmToasterImports } from '@spartan-ng/helm/sonner';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar-component/navbar-component';

@Component({
  selector: 'app-app-shell',
  imports: [RouterOutlet, HlmToasterImports, HlmButtonModule, SidebarComponent, NavbarComponent],
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.css',
})
export class AppShell {}
