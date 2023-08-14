import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let AdminLogInComponent = class AdminLogInComponent {
    constructor(adminService, router, formBuilder, http) {
        this.adminService = adminService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.token = '';
        this.loginObj = {
            Email: 'admin@gmail.com',
            Password: 'admin123',
        };
    }
    DoLogin() {
        this.adminService.adminLogIn(this.loginObj).subscribe((data) => {
            if (!data.admin.Email) {
                window.alert('Email not existed');
            }
            else {
                if (data.admin.Email) {
                    localStorage.setItem('adminEmail', data.admin.Email);
                    this.router.navigate(['admin/dashBoard']);
                }
                else {
                    this.router.navigate(['admin/login']);
                }
            }
        });
    }
};
AdminLogInComponent = __decorate([
    Component({
        selector: 'app-admin-log-in',
        templateUrl: './admin-log-in.component.html',
        styleUrls: ['./admin-log-in.component.css']
    })
], AdminLogInComponent);
//# sourceMappingURL=admin-log-in.component.js.map