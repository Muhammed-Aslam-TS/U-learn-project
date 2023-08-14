import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, GithubAuthProvider } from "@angular/fire/auth";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  form!: FormGroup;
  token: any = '';


  constructor(
    private userService: UserServiceService,
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private fireauth: AngularFireAuth
  ) { }

  loginObj: any = {
    Email: '',
    Password: '',
  };

  ngOnInit() {
    this.form = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.required]
    });
  }

  get formControls() {
    return this.form.controls;
  }

  hasError(controlName: string): boolean {
    const control = this.form.get(controlName);
    return control.touched && control.invalid;
  }

  DoLogin() {
    if (this.form.invalid) {
      return;
    }

    this.loginObj = this.form.value;

    this.userService.DoLogin(this.loginObj).subscribe((data) => {
      console.log(data,'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
      
      if (!data.token) {
        window.alert('Token does not exist');
      } else {
        if (data.token) {
          localStorage.setItem('userToken', data.token);
          localStorage.setItem('userId', data.User._id);
          this.router.navigate(['']);
        } else {
          this.router.navigate(['login']);
        }
      }
    });
  }

  signInWithGoogle() {
    this.fireauth.signInWithPopup(new GoogleAuthProvider()).then((res) => {
      // const data = res.additionalUserInfo?.profile;
      // const user =res.user.phoneNumber
      // console.log(res,"qqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
      

      this.userService.googleSignIn(res).subscribe((respons) => {
        console.log(respons);
        
        if (!respons.uid) {
          window.alert('Token does not exist');
        } else {
          if (respons.uid) {
            localStorage.setItem('userToken', JSON.stringify(respons.uid));
            localStorage.setItem('userId', respons.userId);
            this.router.navigate(['']);
          } else {
            this.router.navigate(['login']);
          }
        }
      });
    });
  }
}
