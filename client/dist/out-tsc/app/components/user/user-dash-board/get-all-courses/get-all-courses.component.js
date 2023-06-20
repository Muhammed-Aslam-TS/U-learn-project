import { __decorate } from "tslib";
import { Component } from '@angular/core';
let GetAllCoursesComponent = class GetAllCoursesComponent {
    constructor(service, postService, router) {
        this.service = service;
        this.postService = postService;
        this.router = router;
        this.page = 1;
        this.count = 0;
        this.tableSize = 7;
        this.tableSizes = [3, 6, 9, 12];
        this.userId = localStorage.getItem('userId');
        this.allCourses = [];
    }
    ngOnInit() {
        this.fetchPosts();
        this.service.getCourse().subscribe((response) => {
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
GetAllCoursesComponent = __decorate([
    Component({
        selector: 'app-get-all-courses',
        templateUrl: './get-all-courses.component.html',
        styleUrls: ['./get-all-courses.component.css']
    })
], GetAllCoursesComponent);
export { GetAllCoursesComponent };
//# sourceMappingURL=get-all-courses.component.js.map