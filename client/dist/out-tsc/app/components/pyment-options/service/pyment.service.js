import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
const httpOptions = {
    headers: new HttpHeaders({
        'content-type': 'application/json',
    }),
};
let PymentService = class PymentService {
    constructor(http) {
        this.http = http;
        this.ApiUrl = 'http://localhost:4000/';
    }
    getDetails(data) {
        return this.http.get(`${this.ApiUrl}placeOrder?courseId=${data}`, httpOptions);
    }
    pymentMethord(paymentData) {
        console.log(paymentData);
        return this.http.post(`${this.ApiUrl}placeOrder`, JSON.stringify(paymentData), httpOptions);
    }
};
PymentService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PymentService);
export { PymentService };
//# sourceMappingURL=pyment.service.js.map