import { Component, computed } from '@angular/core';

@Component({
  selector: 'auth-head-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './auth-head-wrapper.html',
  styleUrl: './auth-head-wrapper.css',
})
export class AuthHeadWrapper {
  neventoryPng = computed(() => '/loginPng/small_image_logo.png');
}
