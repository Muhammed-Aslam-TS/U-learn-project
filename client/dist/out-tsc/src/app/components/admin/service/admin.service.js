import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from 'src/environments/environment';
const httpOptions = {
    headers: new HttpHeaders({
        'content-type': 'application/json',
    }),
};
export let AdminService = class AdminService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.ApiUrl = Environment.ApiUrl;
    }
    DoSignUp(formData) {
        return this.http.post(`${this.ApiUrl}admin/Signup`, formData);
    }
    adminLogIn(admin) {
        return this.http.post(`${this.ApiUrl}admin/adminLogin`, (admin), httpOptions);
    }
    AllUsers() {
        return this.http.get(`${this.ApiUrl}admin/allUsers`, httpOptions);
    }
    getAllCouress() {
        return this.http.get(`${this.ApiUrl}admin/allCourses`, httpOptions);
    }
    BlockUser(userId) {
        return this.http.put(`${this.ApiUrl}admin/BlockUser?userId=${userId}`, httpOptions);
    }
};
AdminService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AdminService);
//# sourceMappingURL=admin.service.js.map