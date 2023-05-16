import { Component } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  form!: FormGroup;

  constructor(
    private userService: UserServiceService,
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}
  loginObj: any = {
    Email: '',
    Password: '',
  };

  DoLogin() {
    this.userService.DoLogin(this.loginObj).subscribe((data) => {
      if (!data.token) {
        window.alert('token not existed')
      } else {
        if (data.token) {
          localStorage.setItem('userToken', data.token);
          this.router.navigate(['']);
        } else {
          this.router.navigate(['login']);
        }
      }
    });
  }
}
