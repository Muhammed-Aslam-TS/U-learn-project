import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { ApiUrl } from 'src/environments/api';
// import { addCourseInterface } from 'src/app/models/interFace';
const httpOptions = {
    headers: new HttpHeaders({
        'content-type': 'application/json',
    }),
};
export let CourseServiceService = class CourseServiceService {
    constructor(http) {
        this.http = http;
        this.ApiUrl = ApiUrl.ApiUrl;
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
//# sourceMappingURL=course-service.service.js.map