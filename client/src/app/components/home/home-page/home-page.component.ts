import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private router: Router) {
    const user = localStorage.getItem('userToken');
    user?this.show1=true :this.show1=false
  }

  show1 = false;

  signUp() {
    this.router.navigate(['login']);
  }
}
