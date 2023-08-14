import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let MyCoursesComponent = class MyCoursesComponent {
    constructor(service, PostService) {
        this.service = service;
        this.PostService = PostService;
        this.page = 1;
        this.count = 0;
        this.tableSize = 7;
        this.tableSizes = [3, 6, 9, 12];
        this.userId = localStorage.getItem('userId');
        this.courseId = '';
        this.MyCourse = [];
        this.user = {};
        this.smae = {};
    }
    ngOnInit() {
        this.fetchPosts();
        this.service.getMyCourse(this.userId).subscribe((data) => {
            this.MyCourse = data.MyCourse;
            const user = data.user.purcherseCourses;
            console.log(data);
            const uniqueData = [];
            user.forEach((element) => {
                const isDuplicate = uniqueData.some((item) => item._id === element._id);
                if (!isDuplicate) {
                    uniqueData.push(element);
                }
            });
            this.smae = uniqueData;
        });
    }
    removeCourse(courseId) {
        this.courseId = courseId;
        this.service.removeCourse(courseId).subscribe((data) => {
            console.log(data);
        });
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
};
MyCoursesComponent = __decorate([
    Component({
        selector: 'app-my-courses',
        templateUrl: './my-courses.component.html',
        styleUrls: ['./my-courses.component.css']
    })
], MyCoursesComponent);
//# sourceMappingURL=my-courses.component.js.map