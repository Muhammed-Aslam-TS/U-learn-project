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

  private ApiUrl = 'https://api.ulearn.shop/';
  // private ApiUrl = 'http://localhost:4000/';



  constructor(private http: HttpClient, private router: Router, private fireauth: AngularFireAuth) { }

  DoLogin(user: object): Observable<any> {
    return this.http.post<any>(
      `${this.ApiUrl}login`,
      JSON.stringify(user),
      httpOptions
    )
  }

  DoSignUp(UserData: FormData): Observable<any> {
    return this.http.post<any>(
      `${this.ApiUrl}signup`,UserData,
      
    )
  }

  googleSignIn(data: object): Observable<any> {
    return this.http.post<any>(
      `${this.ApiUrl}dashBoard`,
      JSON.stringify({ data }),
      httpOptions
    )
  }


  getUserDetails(userId:string): Observable<any> {
    return this.http.get<any>(
      `${this.ApiUrl}getUserDetails?userId=${userId}`,
    )
  }
}


