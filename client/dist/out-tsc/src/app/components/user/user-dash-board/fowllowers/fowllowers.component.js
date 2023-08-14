import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let FowllowersComponent = class FowllowersComponent {
    constructor(service, postService) {
        this.service = service;
        this.postService = postService;
        this.page = 1;
        this.count = 0;
        this.tableSize = 7;
        this.tableSizes = [3, 6, 9, 12];
        this.GetFowllowers = [];
        this.Fowllowers = [];
        this.userId = localStorage.getItem("userId");
    }
    ngOnInit() {
        this.fetchPosts();
        this.service.GetFowllowers(this.userId).subscribe((data) => {
            console.log(data);
            this.GetFowllowers = data.Fowllowers;
            const uniqueData = [];
            this.GetFowllowers.forEach((element) => {
                const isDuplicate = uniqueData.some((item) => item._id === element._id);
                if (!isDuplicate) {
                    uniqueData.push(element);
                }
            });
            this.Fowllowers = uniqueData;
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
FowllowersComponent = __decorate([
    Component({
        selector: 'app-fowllowers',
        templateUrl: './fowllowers.component.html',
        styleUrls: ['./fowllowers.component.css']
    })
], FowllowersComponent);
//# sourceMappingURL=fowllowers.component.js.map