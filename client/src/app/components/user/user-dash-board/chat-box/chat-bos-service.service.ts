// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/internal/Observable';


// const httpOptions = {
//   headers: new HttpHeaders({
//     'content-type': 'application/json',
//   }),
// };
// @Injectable({
//   providedIn: 'root'
// })
// export class UserServiceService {
//   getLoggedInUser() {
//     throw new Error('Method not implemented.');
//   }
//   getChatRoomsChat(chatroom: string | undefined) {
//     throw new Error('Method not implemented.');
//   }

//   private ApiUrl = 'http://localhost:4000/';

//   constructor(private http: HttpClient) { }



//   getChatByRoom(UserData:any):Observable<any>{
//     return this.http.post<any>(
//       `${this.ApiUrl}chat`,
//       JSON.stringify(UserData),
//       httpOptions
//     )
//   }

  
//   showChat(UserData:any):Observable<any>{
//     return this.http.post<any>(
//       `${this.ApiUrl}chat`,
//       JSON.stringify(UserData),
//       httpOptions
//     )
//   }

// }
