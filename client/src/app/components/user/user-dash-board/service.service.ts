import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
// import { addCourseInterface } from 'src/app/models/interFace';



// const httpOptions = {
//   headers: new HttpHeaders({
//     'content-type': 'application/json',
//   }),
// };
@Injectable({
  providedIn: 'root'
})


export class ServiceService {


   ApiUrl = 'https://api.ulearn.shop/';


  constructor(private http: HttpClient) { }


  GetAllCourse(userId: any): Observable<any> {
    return this.http.get<any>(
      `${this.ApiUrl}dashBoard?userId=${userId}`,
    )
  }
  getCourse(): Observable<any> {
    return this.http.get<any>(
      `${this.ApiUrl}Allcourse`,
    )
  }

  GetAllPurchersCourse(userId:string): Observable<any> {
    return this.http.get<any>(
      `${this.ApiUrl}AllPurcherseCourse?userId=${userId}`,
    )
  }
  GetFowllowers(userId:string): Observable<any> {
    return this.http.get<any>(
      `${this.ApiUrl}GetFowllowers?userId=${userId}`,
    )
  }

  getWallet(userId:string): Observable<any> {
    return this.http.get<any>(
      `${this.ApiUrl}userWallet?userId=${userId}`,
    )
  }
  getMyCourse(userId:string) {
    return this.http.get<any>(
      `${this.ApiUrl}getMyCourse?userId=${userId}`,
    )
  }

  removeCourse(courseId:string) {
    return this.http.get<any>(
      `${this.ApiUrl}removeCourse?courseId=${courseId}`,
    )
  }
  
}
