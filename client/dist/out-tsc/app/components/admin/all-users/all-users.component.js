import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AllUsersComponent = class AllUsersComponent {
    constructor(service, postService) {
        this.service = service;
        this.postService = postService;
        this.allUsers = [];
        this.page = 1;
        this.count = 0;
        this.tableSize = 7;
        this.tableSizes = [3, 6, 9, 12];
    }
    ngOnInit() {
        this.fetchPosts();
        this.service.AllUsers().subscribe((response) => {
            this.allUsers = response;
            console.log(response);
        });
    }
    isBlock(userId) {
        console.log(userId);
        localStorage.removeItem("userId");
        localStorage.removeItem("userToken");
        this.service.BlockUser(userId).subscribe((response) => {
            console.log(response);
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
AllUsersComponent = __decorate([
    Component({
        selector: 'app-all-users',
        templateUrl: './all-users.component.html',
        styleUrls: ['./all-users.component.css']
    })
], AllUsersComponent);
export { AllUsersComponent };
//# sourceMappingURL=all-users.component.js.map