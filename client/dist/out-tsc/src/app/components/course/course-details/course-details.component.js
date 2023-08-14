import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let CourseDetailsComponent = class CourseDetailsComponent {
    constructor(service) {
        this.service = service;
        this.image = '';
        this.description = '';
        this.name = '';
        this.Fname = '';
        this.Lname = '';
        this.email = '';
        this.Price = '';
        this.status = false;
    }
    ngOnInit() {
        const courseId = localStorage.getItem('courseId');
        this.service.getCoures(courseId).subscribe((data) => {
            this.category = data.findCategory;
            this.image = data.course.CourseImage;
            this.description = data.course.discription;
            this.name = data.course.courseName;
            this.Price = data.course.Price;
            this.Fname = data.user.Fname;
            this.Lname = data.user.Lname;
            this.email = data.user.Email;
            const user = data.user._id;
            const courseUserId = data.course.userId;
            if (user === courseUserId) {
                this.status = true;
            }
        });
    }
};
CourseDetailsComponent = __decorate([
    Component({
        selector: 'app-course-details',
        templateUrl: './course-details.component.html',
        styleUrls: ['./course-details.component.css']
    })
], CourseDetailsComponent);
//# sourceMappingURL=course-details.component.js.map