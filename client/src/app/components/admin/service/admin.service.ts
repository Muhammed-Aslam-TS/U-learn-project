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

  DoSignUp(formData:any): Observable<any> {
    return this.http.post(`${this.ApiUrl}admin/Signup`, formData);
  }

  adminLogIn(admin: any): Observable<any> {
    return this.http.post<any>(
      `${this.ApiUrl}admin/adminLogin`,
      (admin),
      httpOptions
    )
  }

  AllUsers(): Observable<any> {
    return this.http.get<any>(
      `${this.ApiUrl}admin/allUsers`,
      httpOptions
    )
  }

  getAllCouress(): Observable<any> {
    return this.http.get<any>(
      `${this.ApiUrl}admin/allCourses`,
      httpOptions
    )
  }

  BlockUser(userId: string) {
    return this.http.put<any>(
      `${this.ApiUrl}admin/BlockUser?userId=${userId}`, httpOptions
    )
  }

}
