import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AllCoursesComponent = class AllCoursesComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.userId = localStorage.getItem('userId');
        this.allCourses = [];
    }
    ngOnInit() {
        this.service.getCourse().subscribe((response) => {
            console.log(response);
            this.allCourses = response;
        });
    }
    handleClick(ownerId, coursId) {
        const UserId = localStorage.getItem('userId');
        localStorage.setItem("courseId", coursId);
        this.data = {
            userId: UserId,
            ownerId: ownerId,
            coursId: coursId
        };
        this.router.navigate(['ProAllCourse']);
    }
};
AllCoursesComponent = __decorate([
    Component({
        selector: 'app-all-courses',
        templateUrl: './all-courses.component.html',
        styleUrls: ['./all-courses.component.css']
    })
], AllCoursesComponent);
export { AllCoursesComponent };
//# sourceMappingURL=all-courses.component.js.map