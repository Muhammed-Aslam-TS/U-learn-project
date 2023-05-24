import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
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
  logIn() {
    this.router.navigate(['login'])
  }

  LogOut() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/']);
  }
}

