import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user-service.service';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isDarkMode = true;
  menu = false;
  menuDropdown() {
    this.menu = !this.menu;
  }


  // button = 'LogIn'
  UserId = localStorage.getItem('userId');
  UserToken = localStorage.getItem('userToken');

  response = {
    response: "User LogOut",
    userId: this.UserId
  }


  show = true;


  constructor(private router: Router, private service: UserService, private overlay: OverlayContainer) {
    if (this.UserToken) {
      this.show = false;
    } else {
      this.show = true;
    }

    this.setTheme();
  }
  setTheme() {
    const value = localStorage.getItem('isDarkMode');
    if (value) {
      this.isDarkMode = false;
      document.documentElement.classList.add('dark');
    }
  }
  logIn() {
    this.router.navigate(['login'])
  }

  LogOut() {
    console.log(this.response);
    this.service.logOut(this.response).subscribe((data: any) => {

      
      console.log(data);

      if (data) {
        localStorage.removeItem('userToken');
        localStorage.removeItem('userId');
        this.router.navigate(['/']);
        location.reload()
      }
    })

  }
  handleToggleClick() {
    if (this.isDarkMode) {
      localStorage.setItem('isDarkMode', 'true');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.removeItem('isDarkMode');
      document.documentElement.classList.remove('dark');
    }
    this.isDarkMode = !this.isDarkMode;
  }


}

