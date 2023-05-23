import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
// import { UserServiceService } from '../chat-box/chat-bos-service.service'
// import * as io from "socket.io-client";



@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent  {
  // title = 'Websocket Angular client ';
  // userName: string | undefined;
  // message: string | undefined;
  // output: any[] = [];
  // feedback?: string;

  // // constructor(private webSocketService: ChatBotService) { }
  // // ngOnInit(): void {
  // //   this.webSocketService.listen('typing').subscribe((data) => this.updateFeedback(data))
  // //   this.webSocketService.listen('chat').subscribe((data) => this.updateMessage(data))
  // // }

  // updateMessage(data: any): void {
  //   this.feedback = '';
  //   if (!data) return;
  //   console.log(`${data.handle}: ${data.message}`);
  //   this.output.push(data)

  // }

  // updateFeedback(data: any): void {
  //   this.feedback = `${data} is typing a message`
  // }

  // messageTyping(): void {
  //   console.log(`${this.userName} is typing`)
  //   // this.webSocketService.emit('typing', this.userName)
  // }

  // sendMessage(): void {
  //   console.log({
  //     message: this.message,
  //     handle: this.userName
  //   });
  //   // this.webSocketService.emit('chat', {
  //   //   message: this.message,
  //   //   handle: this.userName
  //   // })

  //   this.message = "";
  // }




  // userName = ''
  // message = ''
  // messageList: { message: string, userName: string, mine: boolean }[] = []
  // userList: string[] = []
  // socket: any


  // userNameUpdate(name: string): void {
  //   this.socket = io.io(`localhost:4000?userName=${name}`)
  //   this.userName = name
  //   this.socket.emit('ser_user_name',this.userName)

  //   this.socket.on('user_list', (userList: string[]) => {
  //     this.userList = userList
  //   })

  //   this.socket.on('message_brodcast',(data:{message:string,userName:string})=>{
  //     if (data) {
  //       this.messageList.push({message:data.message,userName:data.userName,mine:false})
  //     }
  //   })
  // }


  // sendMessage(){
  //   this.socket.emit('message',this.message)
  //   this.messageList.push({message:this.message,userName:this.userName,mine:true})
  //   this.message=''

  // }


  @ViewChild('scrollMe') private myScrollContainer: ElementRef | undefined;

  // chats: any;
  // joinned = false;
  // newUser = { nickname: '', room: '' };
  // msgData = { room: '', nickname: '', message: '' };
  // socket = io('http://localhost:4000');

  // constructor(private chatService: UserServiceService) {}

  // ngOnInit() {
  //   const user = JSON.parse(localStorage.getItem("userToken"));
  //   if(user!==null) {
  //     this.getChatByRoom(user.room);
  //     this.msgData = { room: user.room, nickname: user.nickname, message: '' }
  //     this.joinned = true;
  //     this.scrollToBottom();
  //   }
  //   this.socket.on('new-message',  (data;any) => {
  //     if(data.message.room === JSON.parse(localStorage.getItem("userToken")).room) {
  //       this.chats.push(data.message);
  //       this.msgData = { room: user.room, nickname: user.nickname, message: '' }
  //       this.scrollToBottom();
  //     }
  //   }.bind(this));
  // }

  // ngAfterViewChecked() {
  //   this.scrollToBottom();
  // }

  // scrollToBottom(): void {
  //   try {
  //     this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  //   } catch(err) { }
  // }

  // getChatByRoom(room) {
  //   this.chatService.getChatByRoom(room).then((res) => {
  //     this.chats = res;
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

  // joinRoom() {
  //   var date = new Date();
  //   localStorage.setItem("user", JSON.stringify(this.newUser));
  //   this.getChatByRoom(this.newUser.room);
  //   this.msgData = { room: this.newUser.room, nickname: this.newUser.nickname, message: '' };
  //   this.joinned = true;
  //   this.socket.emit('save-message', { room: this.newUser.room, nickname: this.newUser.nickname, message: 'Join this room', updated_at: date });
  // }

  // sendMessage() {
  //   this.chatService.saveChat(this.msgData).then((result) => {
  //     this.socket.emit('save-message', result);
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

  // logout() {
  //   var date = new Date();
  //   var user = JSON.parse(localStorage.getItem("user"));
  //   this.socket.emit('save-message', { room: user.room, nickname: user.nickname, message: 'Left this room', updated_at: date });
  //   localStorage.removeItem("user");
  //   this.joinned = false;
  // }


}
