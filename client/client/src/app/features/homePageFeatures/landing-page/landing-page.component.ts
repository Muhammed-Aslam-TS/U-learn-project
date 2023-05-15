import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  constructor(private router: Router) {
    const user = localStorage.getItem('userToken');
    user?this.show1=true :this.show1=false
  }

  show1 = false;

  signUp() {
    this.router.navigate(['login']);
  }
  
}
