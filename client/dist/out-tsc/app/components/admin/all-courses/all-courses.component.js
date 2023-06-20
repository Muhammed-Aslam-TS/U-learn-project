import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AllCoursesComponent = class AllCoursesComponent {
    constructor(service, postService) {
        this.service = service;
        this.postService = postService;
        this.page = 1;
        this.count = 0;
        this.tableSize = 7;
        this.tableSizes = [3, 6, 9, 12];
        this.allCourses = [];
    }
    ngOnInit() {
        this.fetchPosts();
        this.service.getAllCouress().subscribe((response) => {
            console.log(response);
            this.allCourses = response;
        });
    }
    fetchPosts() {
        this.postService.getAllPosts().subscribe((response) => {
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