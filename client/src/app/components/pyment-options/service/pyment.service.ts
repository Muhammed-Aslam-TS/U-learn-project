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
export class PymentService {
  private ApiUrl = Environment.ApiUrl





  constructor(private http: HttpClient) { }

  getDetails(data: any) {
    return this.http.get<any>(
      `${this.ApiUrl}placeOrder?courseId=${data}`,
      httpOptions
    )
  }



  pymentMethord(paymentData: any): Observable<any> {    
      return this.http.post<any>(
        `${this.ApiUrl}placeOrder`,
        JSON.stringify(paymentData),
        httpOptions
      )
    }
  


}
