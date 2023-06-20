import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
const endpoint = 'https://jsonplaceholder.typicode.com/posts';
let PostService = class PostService {
    constructor(http) {
        this.http = http;
    }
    getAllPosts() {
        return this.http.get(endpoint);
    }
};
PostService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], PostService);
export { PostService };
//# sourceMappingURL=post.service.js.map