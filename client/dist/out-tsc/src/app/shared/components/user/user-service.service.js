import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl } from 'src/environments/api';
const httpOptions = {
    headers: new HttpHeaders({
        'content-type': 'application/json',
    }),
};
export let UserService = class UserService {
    // private ApiUrl = '  http://localhost:4000/';
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.ApiUrl = ApiUrl.ApiUrl;
    }
    logOut(response) {
        return this.http.post(`${this.ApiUrl}logOut`, JSON.stringify({ response }), httpOptions);
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
//# sourceMappingURL=user-service.service.js.map