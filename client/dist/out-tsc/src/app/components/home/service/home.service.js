import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { Environment } from 'src/environments/environment';
// import { addCourseInterface } from 'src/app/models/interFace';
const httpOptions = {
    headers: new HttpHeaders({
        'content-type': 'application/json',
    }),
};
export let HomeService = class HomeService {
    constructor(http) {
        this.http = http;
        this.ApiUrl = Environment.ApiUrl;
    }
    GetAllCourse() {
        return this.http.get(`${this.ApiUrl}`, httpOptions);
    }
    serchData(formData) {
        return this.http.post(`${this.ApiUrl}SerchData`, ({ formData }), httpOptions);
    }
};
HomeService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], HomeService);
//# sourceMappingURL=home.service.js.map