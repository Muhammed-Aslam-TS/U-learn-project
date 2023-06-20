import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UlearnBannerComponent = class UlearnBannerComponent {
    constructor(router, service, formBuilder, postService) {
        this.router = router;
        this.service = service;
        this.formBuilder = formBuilder;
        this.postService = postService;
        this.page = 1;
        this.count = 0;
        this.tableSize = 7;
        this.tableSizes = [3, 6, 9, 12];
        this.imageURL = '';
        this.courseData = [];
        this.searchData = '';
        this.show1 = false;
        this.showModal = false;
        const user = localStorage.getItem('userToken');
        user ? this.show1 = true : this.show1 = false;
    }
    signUp() {
        this.router.navigate(['login']);
    }
    ngOnInit() {
        this.fetchPosts();
    }
    searchSubmit() {
        this.toggleModal();
        this.service.serchData(this.searchData).subscribe((response) => {
            this.courseData = response;
            console.log(response);
        });
    }
    toggleModal() {
        this.showModal = !this.showModal;
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
UlearnBannerComponent = __decorate([
    Component({
        selector: 'app-ulearn-banner',
        templateUrl: './ulearn-banner.component.html',
        styleUrls: ['./ulearn-banner.component.css']
    })
], UlearnBannerComponent);
export { UlearnBannerComponent };
//# sourceMappingURL=ulearn-banner.component.js.map