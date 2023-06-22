import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from 'socket.io-client';



const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  private ApiUrl = 'https://api.ulearn.shop/';
  
  constructor(private http: HttpClient) { }

  public message$: BehaviorSubject<string> = new BehaviorSubject('');


  socket = io('http://localhost:4000');

  public sendMessage(message: any) {
    console.log('sendMessage: ', message)
    this.socket.emit('message', message);
  }

  public getNewMessage = () => {
    this.socket.on('message', (message) => {
      console.log(message, "_______recive message");
      this.message$.next(message);
    });

    return this.message$.asObservable();
  };


  // storeMessage(data:any){
  //   return this.http.post<any>(
  //     `${this.ApiUrl}chatBox`,
  //     JSON.stringify({ data }),
  //     httpOptions
  //   )
  // }

}