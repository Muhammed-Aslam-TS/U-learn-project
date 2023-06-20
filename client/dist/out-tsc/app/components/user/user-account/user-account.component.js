import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UserAccountComponent = class UserAccountComponent {
    constructor(service) {
        this.service = service;
        this.userId = localStorage.getItem('userId');
        this.userFname = '';
        this.userLname = '';
        this.userEmail = '';
        this.userPhone = '';
    }
    ngOnInit() {
        this.service.getUserDetails(this.userId).subscribe(((data) => {
            console.log(data);
            this.userFname = data.Fname;
            this.userEmail = data.Email;
            this.userLname = data.Lname;
            this.userPhone = data.Phone;
        }));
    }
};
UserAccountComponent = __decorate([
    Component({
        selector: 'app-user-account',
        templateUrl: './user-account.component.html',
        styleUrls: ['./user-account.component.css']
    })
], UserAccountComponent);
export { UserAccountComponent };
//# sourceMappingURL=user-account.component.js.map