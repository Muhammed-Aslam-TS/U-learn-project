import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  show = true;

  AdminEmail = localStorage.getItem('adminEmail');

  constructor(private router: Router) {
    if (this.AdminEmail) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
  logIn() {
    this.router.navigate(['admin/dashBoard'])
  }

  LogOut() {
    localStorage.removeItem('adminEmail');
    this.router.navigate(['admin/login']);
  }
}
