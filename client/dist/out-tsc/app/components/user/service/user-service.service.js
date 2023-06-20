import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const httpOptions = {
    headers: new HttpHeaders({
        'content-type': 'application/json',
    }),
};
let UserServiceService = class UserServiceService {
    constructor(http, router, fireauth) {
        this.http = http;
        this.router = router;
        this.fireauth = fireauth;
        this.ApiUrl = 'http://localhost:4000/';
    }
    DoLogin(user) {
        return this.http.post(`${this.ApiUrl}login`, JSON.stringify(user), httpOptions);
    }
    DoSignUp(UserData) {
        console.log(UserData, "llllllllllllllllllllllllll");
        return this.http.post(`${this.ApiUrl}signup`, UserData);
    }
    googleSignIn(data) {
        return this.http.post(`${this.ApiUrl}dashBoard`, JSON.stringify({ data }), httpOptions);
    }
    getUserDetails(userId) {
        return this.http.get(`${this.ApiUrl}getUserDetails?userId=${userId}`);
    }
};
UserServiceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserServiceService);
export { UserServiceService };
//# sourceMappingURL=user-service.service.js.map