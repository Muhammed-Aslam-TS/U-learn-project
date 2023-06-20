import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
// import { addCourseInterface } from 'src/app/models/interFace';
const httpOptions = {
    headers: new HttpHeaders({
        'content-type': 'application/json',
    }),
};
let ServiceService = class ServiceService {
    constructor(http) {
        this.http = http;
        this.ApiUrl = 'http://localhost:4000/';
    }
    GetAllCourse(userId) {
        return this.http.get(`${this.ApiUrl}dashBoard?userId=${userId}`);
    }
    getCourse() {
        return this.http.get(`${this.ApiUrl}Allcourse`);
    }
    GetAllPurchersCourse(userId) {
        return this.http.get(`${this.ApiUrl}AllPurcherseCourse?userId=${userId}`);
    }
    GetFowllowers(userId) {
        return this.http.get(`${this.ApiUrl}GetFowllowers?userId=${userId}`);
    }
    getWallet(userId) {
        return this.http.get(`${this.ApiUrl}userWallet?userId=${userId}`);
    }
    getMyCourse(userId) {
        return this.http.get(`${this.ApiUrl}getMyCourse?userId=${userId}`);
    }
    removeCourse(courseId) {
        return this.http.get(`${this.ApiUrl}removeCourse?courseId=${courseId}`);
    }
};
ServiceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ServiceService);
export { ServiceService };
//# sourceMappingURL=service.service.js.map