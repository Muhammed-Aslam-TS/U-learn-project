import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DashBoardNavBarComponent = class DashBoardNavBarComponent {
    constructor() {
        this.show = true;
        this.AdminEmail = localStorage.getItem('adminEmail');
        this.isMenu = false;
        this.isSearch = false;
    }
    isMenuBtn() {
        this.isMenu = !this.isMenu;
    }
};
DashBoardNavBarComponent = __decorate([
    Component({
        selector: 'app-dash-board-nav-bar',
        templateUrl: './dash-board-nav-bar.component.html',
        styleUrls: ['./dash-board-nav-bar.component.css']
    })
], DashBoardNavBarComponent);
export { DashBoardNavBarComponent };
//# sourceMappingURL=dash-board-nav-bar.component.js.map