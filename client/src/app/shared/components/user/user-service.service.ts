import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiUrl } from 'src/environments/api';



const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private ApiUrl = ApiUrl.ApiUrl
  // private ApiUrl = '  http://localhost:4000/';



  constructor(private http: HttpClient, private router: Router) { }


  logOut(response: any): Observable<any> {
    return this.http.post<any>(
      `${this.ApiUrl}logOut`,
      JSON.stringify({ response }),
      httpOptions
    )
  }



}


