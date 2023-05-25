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
    this.fireauth.signInWithPopup(new GoogleAuthProvider).then((res) => {
      // console.log(data,'________________________jjjjjjjjjjjjjjjjjjjjjj')
      const data = res.additionalUserInfo?.profile
      console.log(data);
      
        this.userService.googleSignIn(res).subscribe((respons) => {
   console.log(respons.Uid, '______________________________________');
          if (!respons.Uid) {
            window.alert('token not existed')
          } else {
            if (respons.Uid) {
              window.alert('id ok')
              localStorage.setItem('userToken', JSON.stringify(respons.Uid))
              this.router.navigate(['']);
            } else {
              this.router.navigate(['login']);
            }
          }



       
          // this.router.navigate([''])

        })
    })
  }

  // ngOnInit(){
  
  // }
}


