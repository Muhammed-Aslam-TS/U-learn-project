import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NavBarComponent = class NavBarComponent {
    menuDropdown() {
        this.menu = !this.menu;
    }
    constructor(router) {
        this.router = router;
        this.menu = false;
        this.show = true;
        this.AdminEmail = localStorage.getItem('adminEmail');
        if (this.AdminEmail) {
            this.show = false;
        }
        else {
            this.show = true;
        }
    }
    logIn() {
        this.router.navigate(['admin/dashBoard']);
    }
    LogOut() {
        localStorage.removeItem('adminEmail');
        this.router.navigate(['admin/login']);
    }
};
NavBarComponent = __decorate([
    Component({
        selector: 'app-nav-bar',
        templateUrl: './nav-bar.component.html',
        styleUrls: ['./nav-bar.component.css']
    })
], NavBarComponent);
export { NavBarComponent };
//# sourceMappingURL=nav-bar.component.js.map