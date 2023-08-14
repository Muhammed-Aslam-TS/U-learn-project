import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let AllCoursesComponent = class AllCoursesComponent {
    constructor(router, service, PostService) {
        this.router = router;
        this.service = service;
        this.PostService = PostService;
        this.page = 1;
        this.count = 0;
        this.tableSize = 7;
        this.tableSizes = [3, 6, 9, 12];
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
AllCoursesComponent = __decorate([
    Component({
        selector: 'app-all-courses',
        templateUrl: './all-courses.component.html',
        styleUrls: ['./all-courses.component.css']
    })
], AllCoursesComponent);
//# sourceMappingURL=all-courses.component.js.map