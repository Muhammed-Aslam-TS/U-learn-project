import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.css']
})
export class ChatUserComponent {
  @Output() userNameEvent = new EventEmitter<string>()
  userName = ''
  // UserId = localStorage.getItem('userToken');
  setUserName() {
    this.userNameEvent.emit(this.userName)
  }
}