import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, GithubAuthProvider, } from "@angular/fire/auth"

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  form!: FormGroup;
  token:any = ''

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

  signInWithGoole() {
    console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyyy');

    this.fireauth.signInWithPopup(new GoogleAuthProvider).then((res: any) => {
      this.router.navigate([''])
      localStorage.setItem('userToken', JSON.stringify(res.user?.uid))
      this.token = localStorage.getItem("userToken")
      console.log(this.token,'+++++++++++++++++++++++');

      const token = this.token
      if (token) {
        this.userService.googleSignIn(token).subscribe((data) => {
          console.log(data.message, '______________________________________');
        })
       }
    })
  }

  // ngOnInit(){
  
  // }
}


