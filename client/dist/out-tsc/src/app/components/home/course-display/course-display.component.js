import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let CourseDisplayComponent = class CourseDisplayComponent {
    constructor(router, service, PostService) {
        this.router = router;
        this.service = service;
        this.PostService = PostService;
        this.page = 1;
        this.count = 0;
        this.tableSize = 7;
        this.tableSizes = [3, 6, 9, 12];
        this.courseData = [];
        this.user = localStorage.getItem('userToken');
    }
    ngOnInit() {
        this.service.GetAllCourse().subscribe((data) => {
            this.courseData = data;
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
    fetchPosts() {
        this.PostService.getAllPosts().subscribe((response) => {
            this.POSTS = response;
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }
    onTableDataChange(event) {
        this.page = event;
        this.fetchPosts();
    }
    onTableSizeChange(event) {
        this.tableSize = event.target.value;
        this.page = 1;
        this.fetchPosts();
    }
    Onclick(ownerId, coursId) {
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
//# sourceMappingURL=course-display.component.js.map