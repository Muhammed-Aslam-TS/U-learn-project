import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
// import { addCourseInterface } from 'src/app/models/interFace';
const httpOptions = {
    headers: new HttpHeaders({
        'content-type': 'application/json',
    }),
};
let CourseServiceService = class CourseServiceService {
    constructor(http) {
        this.http = http;
        this.ApiUrl = 'https://api.ulearn.shop/';
    }
    addCourse(formData) {
        return this.http.post(`${this.ApiUrl}addCourse`, formData);
    }
    getCoures(data) {
        return this.http.get(`${this.ApiUrl}courseDetails?courseId=${data}`, httpOptions);
    }
};
CourseServiceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CourseServiceService);
export { CourseServiceService };
//# sourceMappingURL=course-service.service.js.map