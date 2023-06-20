import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const httpOptions = {
    headers: new HttpHeaders({
        'content-type': 'application/json',
    }),
};
let UserService = class UserService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.ApiUrl = 'http://localhost:4000/';
    }
    logOut(response) {
        console.log(response, "jjjjjjjjjjjjjjjjj");
        return this.http.post(`${this.ApiUrl}logOut`, JSON.stringify({ response }), httpOptions);
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user-service.service.js.map