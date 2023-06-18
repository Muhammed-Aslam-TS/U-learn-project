import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css']
})
export class DarkModeComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    this.renderer.addClass(document.documentElement, prefersDarkMode.matches ? 'dark-mode' : 'light-mode');

    prefersDarkMode.addEventListener('change', event => {
      this.renderer.removeClass(document.documentElement, event.matches ? 'light-mode' : 'dark-mode');
      this.renderer.addClass(document.documentElement, event.matches ? 'dark-mode' : 'light-mode');
    });
  }
}
