import { __decorate } from "tslib";
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
export let UserAccountComponent = class UserAccountComponent {
    constructor(service, formBuilder, router) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.router = router;
        this.userId = localStorage.getItem('userId');
        this.userFname = '';
        this.userLname = '';
        this.userEmail = '';
        this.userPhone = '';
        this.image = '';
        this.editObj = {
            Fname: '',
            Lname: '',
            Email: '',
            Phone: '',
            userId: this.userId
        };
        this.modal = true;
    }
    modalBtn() {
        this.modal = !this.modal;
    }
    ngOnInit() {
        this.service.getUserDetails(this.userId).subscribe(((data) => {
            console.log(data);
            this.userFname = data.Fname;
            this.userLname = data.Lname;
            this.userEmail = data.Email;
            this.userPhone = data.Phone;
            this.image = data.image;
        }));
    }
    onSubmit() {
        this.service.getUserDetailsEdit(this.editObj).subscribe(((data) => {
            if (data.message) {
                Swal.fire('Your Details Updated', 'You clicked the button!', 'success');
            }
            location.reload();
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
//# sourceMappingURL=user-account.component.js.map