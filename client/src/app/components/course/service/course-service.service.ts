import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { Environment } from 'src/environments/environment';



const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  private ApiUrl = Environment.ApiUrl

  constructor(private http: HttpClient) { }


  addCourse(formData: FormData): Observable<any> {
    return this.http.post(`${this.ApiUrl}addCourse`, formData);
  }


  getCoures(data: any) {
    return this.http.get<any>(
      `${this.ApiUrl}courseDetails?courseId=${data}`,
      httpOptions
    )
  }


}
