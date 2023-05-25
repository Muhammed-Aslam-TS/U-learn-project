import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, GithubAuthProvider, } from "@angular/fire/auth"


const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  // getLoggedInUser() {
  //   throw new Error('Method not implemented.');
  // }
  // getChatRoomsChat(chatroom: string | undefined) {
  //   throw new Error('Method not implemented.');
  // }

  private ApiUrl = 'http://localhost:4000/';


  constructor(private http: HttpClient, private router: Router, private fireauth: AngularFireAuth) { }

  DoLogin(user: any): Observable<any> {
    return this.http.post<any>(
      `${this.ApiUrl}login`,
      JSON.stringify(user),
      httpOptions
    )
  }

  DoSignUp(UserData: any): Observable<any> {
    return this.http.post<any>(
      `${this.ApiUrl}signup`,
      JSON.stringify(UserData),
      httpOptions
    )
  }


  googleSignIn(data:any) {
    console.log(data, 'ttttttttttttttttttttttttttt')
    return this.http.post<any>(
      `${this.ApiUrl}googleSignup`,
      JSON.stringify({data}),
      httpOptions
    )
  }
}


