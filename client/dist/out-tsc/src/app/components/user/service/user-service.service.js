import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from 'src/environments/environment';
const httpOptions = {
    headers: new HttpHeaders({
        'content-type': 'application/json',
    }),
};
export let UserServiceService = class UserServiceService {
    constructor(http, router, fireauth) {
        this.http = http;
        this.router = router;
        this.fireauth = fireauth;
        this.ApiUrl = Environment.ApiUrl;
    }
    DoLogin(user) {
        return this.http.post(`${this.ApiUrl}login`, JSON.stringify(user), httpOptions);
    }
    DoSignUp(UserData) {
        return this.http.post(`${this.ApiUrl}signup`, UserData);
    }
    googleSignIn(data) {
        return this.http.post(`${this.ApiUrl}googleSignup`, JSON.stringify({ data }), httpOptions);
    }
    getUserDetails(userId) {
        return this.http.get(`${this.ApiUrl}getUserDetails?userId=${userId}`);
    }
    getUserDetailsEdit(formData) {
        return this.http.post(`${this.ApiUrl}getUserDetailsEdit`, JSON.stringify(formData), httpOptions);
    }
};
UserServiceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserServiceService);
//# sourceMappingURL=user-service.service.js.map