import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board-nav-bar',
  templateUrl: './dash-board-nav-bar.component.html',
  styleUrls: ['./dash-board-nav-bar.component.css']
})
export class DashBoardNavBarComponent {
  show = true;

  AdminEmail = localStorage.getItem('adminEmail');

  isList: number;
  isMenu = false;
  isMenuBtn() {
    this.isMenu = !this.isMenu;
  }
  isSearch = false;
}
