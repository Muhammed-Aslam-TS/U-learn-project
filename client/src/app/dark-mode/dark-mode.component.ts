import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css']
})
export class DarkModeComponent  {
  constructor(private renderer: Renderer2) {}


}