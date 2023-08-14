import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { ApiUrl } from 'src/environments/api';
const httpOptions = {
    headers: new HttpHeaders({
        'content-type': 'application/json',
    }),
};
export let PymentService = class PymentService {
    constructor(http) {
        this.http = http;
        this.ApiUrl = ApiUrl.ApiUrl;
    }
    getDetails(data) {
        return this.http.get(`${this.ApiUrl}placeOrder?courseId=${data}`, httpOptions);
    }
    pymentMethord(paymentData) {
        return this.http.post(`${this.ApiUrl}placeOrder`, JSON.stringify(paymentData), httpOptions);
    }
};
PymentService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PymentService);
//# sourceMappingURL=pyment.service.js.map