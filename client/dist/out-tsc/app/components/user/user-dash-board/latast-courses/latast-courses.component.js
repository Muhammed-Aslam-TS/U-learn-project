import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LatastCoursesComponent = class LatastCoursesComponent {
    constructor(service) {
        this.service = service;
        this.allCourseData = [];
        this.userId = localStorage.getItem("userId");
    }
    ngOnInit() {
        this.service.GetAllCourse(this.userId).subscribe((data) => {
            this.allCourseData = data;
        });
    }
};
LatastCoursesComponent = __decorate([
    Component({
        selector: 'app-latast-courses',
        templateUrl: './latast-courses.component.html',
        styleUrls: ['./latast-courses.component.css']
    })
], LatastCoursesComponent);
export { LatastCoursesComponent };
//# sourceMappingURL=latast-courses.component.js.map