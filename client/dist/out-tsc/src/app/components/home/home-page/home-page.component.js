import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let HomePageComponent = class HomePageComponent {
    constructor(router, service, formBuilder) {
        this.router = router;
        this.service = service;
        this.formBuilder = formBuilder;
        this.imageURL = '';
        this.courseData = [];
        this.searchData = '';
        this.show1 = false;
        const user = localStorage.getItem('userToken');
        user ? this.show1 = true : this.show1 = false;
    }
    signUp() {
        this.router.navigate(['login']);
    }
};
HomePageComponent = __decorate([
    Component({
        selector: 'app-home-page',
        templateUrl: './home-page.component.html',
        styleUrls: ['./home-page.component.css']
    })
], HomePageComponent);
//# sourceMappingURL=home-page.component.js.map