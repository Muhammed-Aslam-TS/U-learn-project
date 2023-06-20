import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CourseDisplayComponent = class CourseDisplayComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.courseData = [];
        this.user = localStorage.getItem('userToken');
    }
    ngOnInit() {
        this.service.GetAllCourse().subscribe((data) => {
            this.courseData = data;
            console.log(this.courseData, 'course dataaaaaaaaaaaaaa');
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
        this.router.navigate(['courseDetails']);
    }
};
CourseDisplayComponent = __decorate([
    Component({
        selector: 'app-course-display',
        templateUrl: './course-display.component.html',
        styleUrls: ['./course-display.component.css']
    })
], CourseDisplayComponent);
export { CourseDisplayComponent };
//# sourceMappingURL=course-display.component.js.map