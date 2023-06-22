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
export class HomeService {

  private ApiUrl = 'https://api.ulearn.shop/';
  // private ApiUrl = 'http://localhost:4200/';

  constructor(private http: HttpClient) { }
  
  GetAllCourse(): Observable<any> {
    return this.http.get<any>(
      `${this.ApiUrl}`,
      httpOptions
    )
  }

  chatRoom(data:object):Observable<any>{
    return this.http.post<any>(
      `${this.ApiUrl}ChattText`,
      (data),
      httpOptions
    )
  }




  serchData(formData: string): Observable<any> {
    return this.http.post(`${this.ApiUrl}SerchData`, ({formData}),httpOptions);
  }

  

}
