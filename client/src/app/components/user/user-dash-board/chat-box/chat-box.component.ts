import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ChatServiceService } from './chat-service.service';
// import { UserServiceService } from '../chat-box/chat-bos-service.service'
// import * as io from "socket.io-client";



@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  newMessage = '';
  messageList: string[] = [];

  constructor(private chatService: ChatServiceService){

  }


  ngOnInit(){
    this.chatService.getNewMessage().subscribe((message: string) => {
      console.log(message,'lllllllllll');
      this.messageList.push(message);
    })  

    // this.chatService.storeMessage(this.messageList)
  }



  sendMessage() {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
}
