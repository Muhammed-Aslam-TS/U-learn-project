import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
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
export class CourseServiceService {

  private ApiUrl = 'http://localhost:4000/';

  constructor(private http: HttpClient) { }


  addCourse(data:any,userId:any): Observable<any> {
    console.log(data,'data vannu-------------------------');
    return this.http.post<any>(
      `${this.ApiUrl}addCourse?userId=${userId}`,(data),
      httpOptions
    )
  }


}
