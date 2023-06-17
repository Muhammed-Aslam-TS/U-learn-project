import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../service/home.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  imageURL = '';
  courseData: any[] = []
  userId?: string
  searchData = ''

  constructor(private router: Router, private service: HomeService, private formBuilder: FormBuilder) {
    const user = localStorage.getItem('userToken');
    user ? this.show1 = true : this.show1 = false
  }

  show1 = false;

  signUp() {
    this.router.navigate(['login']);
  }

}


