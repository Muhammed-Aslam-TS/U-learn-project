import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
// import { addCourseInterface } from 'src/app/models/interFace';
const httpOptions = {
    headers: new HttpHeaders({
        'content-type': 'application/json',
    }),
};
let HomeService = class HomeService {
    constructor(http) {
        this.http = http;
        this.ApiUrl = 'https://api.ulearn.shop/';
    }
    GetAllCourse() {
        return this.http.get(`${this.ApiUrl}`, httpOptions);
    }
    chatRoom(data) {
        return this.http.post(`${this.ApiUrl}ChattText`, (data), httpOptions);
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
export { HomeService };
//# sourceMappingURL=home.service.js.map