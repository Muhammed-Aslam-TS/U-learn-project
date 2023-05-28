import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private ApiUrl = 'http://localhost:4000/';


  constructor(private http: HttpClient, private router: Router) { }


  adminLogIn(admin: any): Observable<any> {
    console.log(admin,'admin______________________');
    
    return this.http.post<any>(
      `${this.ApiUrl}admin/adminLogin`,
      (admin),
      httpOptions
    )
  }
}
