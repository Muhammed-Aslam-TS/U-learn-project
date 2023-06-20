import { __decorate } from "tslib";
import { Component } from '@angular/core';
let GetAllPurchesedCourseComponent = class GetAllPurchesedCourseComponent {
    constructor(service, router, postService) {
        this.service = service;
        this.router = router;
        this.postService = postService;
        this.page = 1;
        this.count = 0;
        this.tableSize = 7;
        this.tableSizes = [3, 6, 9, 12];
        this.userId = localStorage.getItem('userId');
        this.allPurchersCourseData = [];
    }
    ngOnInit() {
        this.fetchPosts();
        this.service.GetAllPurchersCourse(this.userId).subscribe((data) => {
            this.allPurchersCourseData = data.purcherseCourses;
        });
    }
    handleClick(ownerId, coursId) {
        console.log(ownerId, coursId);
        const UserId = localStorage.getItem('userId');
        localStorage.setItem("courseId", coursId);
        localStorage.setItem("ownerId", ownerId);
        this.data = {
            userId: UserId,
            ownerId: ownerId,
            coursId: coursId
        };
        this.router.navigate(['chatBox']);
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
GetAllPurchesedCourseComponent = __decorate([
    Component({
        selector: 'app-get-all-purchesed-course',
        templateUrl: './get-all-purchesed-course.component.html',
        styleUrls: ['./get-all-purchesed-course.component.css']
    })
], GetAllPurchesedCourseComponent);
export { GetAllPurchesedCourseComponent };
//# sourceMappingURL=get-all-purchesed-course.component.js.map