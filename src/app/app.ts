import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmToasterImports } from '@spartan-ng/helm/sonner';
import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ErrorService } from './shared/services/error-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HlmToasterImports, HlmButtonImports],
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
