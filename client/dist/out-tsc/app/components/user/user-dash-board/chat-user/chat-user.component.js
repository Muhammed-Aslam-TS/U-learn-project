import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
let ChatUserComponent = class ChatUserComponent {
    constructor() {
        this.userNameEvent = new EventEmitter();
        this.userName = '';
    }
    // UserId = localStorage.getItem('userToken');
    setUserName() {
        this.userNameEvent.emit(this.userName);
    }
};
__decorate([
    Output()
], ChatUserComponent.prototype, "userNameEvent", void 0);
ChatUserComponent = __decorate([
    Component({
        selector: 'app-chat-user',
        templateUrl: './chat-user.component.html',
        styleUrls: ['./chat-user.component.css']
    })
], ChatUserComponent);
export { ChatUserComponent };
//# sourceMappingURL=chat-user.component.js.map