import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Environment } from 'src/environments/environment';
export let ServiceService = class ServiceService {
    constructor(http) {
        this.http = http;
        this.ApiUrl = Environment.ApiUrl;
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
//# sourceMappingURL=service.service.js.map