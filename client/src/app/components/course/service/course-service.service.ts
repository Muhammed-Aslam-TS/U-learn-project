import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';



const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  uploadFile(file: File, bucketName: string, key: string) {
    throw new Error('Method not implemented.');
  }
  private ApiUrl = 'http://localhost:4000/';

  constructor(private http: HttpClient) { }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addCourse(data:any): Observable<any> {
    console.log(data,'data vannu-------------------------');
    return this.http.post<any>(
      `${this.ApiUrl}addCourse`,
      JSON.stringify(data),
      httpOptions
    )
  }


}
