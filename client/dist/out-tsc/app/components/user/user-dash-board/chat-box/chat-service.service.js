import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { io } from 'socket.io-client';
const httpOptions = {
    headers: new HttpHeaders({
        'content-type': 'application/json',
    }),
};
let ChatServiceService = class ChatServiceService {
    constructor(http) {
        this.http = http;
        this.ApiUrl = 'http://localhost:4000/';
        this.message$ = new BehaviorSubject('');
        this.socket = io('http://localhost:4000');
        this.getNewMessage = () => {
            this.socket.on('message', (message) => {
                console.log(message, "_______recive message");
                this.message$.next(message);
            });
            return this.message$.asObservable();
        };
    }
    sendMessage(message) {
        console.log('sendMessage: ', message);
        this.socket.emit('message', message);
    }
};
ChatServiceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ChatServiceService);
export { ChatServiceService };
//# sourceMappingURL=chat-service.service.js.map