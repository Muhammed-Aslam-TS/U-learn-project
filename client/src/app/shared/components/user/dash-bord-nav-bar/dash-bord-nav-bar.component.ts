import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-bord-nav-bar',
  templateUrl: './dash-bord-nav-bar.component.html',
  styleUrls: ['./dash-bord-nav-bar.component.css']
})
export class DashBordNavBarComponent {
  isList: number;
  isMenu = false;
  isMenuBtn() {
    this.isMenu = !this.isMenu;
  }
  isSearch = false;
}
