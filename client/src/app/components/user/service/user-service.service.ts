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
export class UserServiceService {
  getLoggedInUser() {
    throw new Error('Method not implemented.');
  }
  getChatRoomsChat(chatroom: string | undefined) {
    throw new Error('Method not implemented.');
  }

  private ApiUrl = 'http://localhost:4000/';

  constructor(private http: HttpClient) { }

  DoLogin(user: any): Observable<any> {
    return this.http.post<any>(
      `${this.ApiUrl}login`,
      JSON.stringify(user),
      httpOptions
    )
  }

  DoSignUp(UserData:any):Observable<any>{
    return this.http.post<any>(
      `${this.ApiUrl}signup`,
      JSON.stringify(UserData),
      httpOptions
    )
  }
}
