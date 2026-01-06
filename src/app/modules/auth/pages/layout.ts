import { Component, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'],
})
export class Layout {
  neventoryPng = computed(() => '/loginPng/_Logo-removebg-preview.png');
}
// public\loginPng\_Logo-removebg-preview.png
