import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ApiUrl } from 'src/environments/api';


const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private ApiUrl = ApiUrl.ApiUrl

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
      `${this.ApiUrl}signup`, UserData,

    )
  }

  googleSignIn(data: object): Observable<any> {
    return this.http.post<any>(
      `${this.ApiUrl}googleSignup`,
      JSON.stringify({ data }),
      httpOptions
    )
  }


  getUserDetails(userId: string): Observable<any> {
    return this.http.get<any>(
      `${this.ApiUrl}getUserDetails?userId=${userId}`,
    )
  }

  getUserDetailsEdit(formData: object): Observable<any> {    
    return this.http.post<any>(
      `${this.ApiUrl}getUserDetailsEdit`, 
      JSON.stringify( formData ), httpOptions
    )
  }
}


