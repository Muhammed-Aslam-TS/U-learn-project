import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DashBordNavBarComponent = class DashBordNavBarComponent {
    constructor() {
        this.isMenu = false;
        this.isSearch = false;
    }
    isMenuBtn() {
        this.isMenu = !this.isMenu;
    }
};
DashBordNavBarComponent = __decorate([
    Component({
        selector: 'app-dash-bord-nav-bar',
        templateUrl: './dash-bord-nav-bar.component.html',
        styleUrls: ['./dash-bord-nav-bar.component.css']
    })
], DashBordNavBarComponent);
export { DashBordNavBarComponent };
//# sourceMappingURL=dash-bord-nav-bar.component.js.map