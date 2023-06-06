import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
// import { addCourseInterface } from 'src/app/models/interFace';



const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private ApiUrl = 'http://localhost:4000/';
  constructor(private http: HttpClient) { }


  GetAllCourse(userId:any): Observable<any> {
    return this.http.get<any>(
      `${this.ApiUrl}dashBoard?userId=${userId}`,
      )
  }
  getCourse(): Observable<any> {
    return this.http.get<any>(
      `${this.ApiUrl}Allcourse`,
      )
  }
}
