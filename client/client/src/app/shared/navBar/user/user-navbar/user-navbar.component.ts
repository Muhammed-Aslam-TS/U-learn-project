import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css'],
})
export class UserNavbarComponent {
  // button = 'LogIn'

  show = true;

  UserToken = localStorage.getItem('userToken');

  constructor(private router: Router) {
    if (this.UserToken) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
  logIn() {}

  LogOut() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/']);
  }
}
