import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NavBarComponent = class NavBarComponent {
    menuDropdown() {
        this.menu = !this.menu;
    }
    constructor(router, service, overlay) {
        this.router = router;
        this.service = service;
        this.overlay = overlay;
        this.menu = false;
        // button = 'LogIn'
        this.UserId = localStorage.getItem('userId');
        this.UserToken = localStorage.getItem('userToken');
        this.response = {
            response: "User LogOut",
            userId: this.UserId
        };
        this.show = true;
        if (this.UserToken) {
            this.show = false;
        }
        else {
            this.show = true;
        }
    }
    logIn() {
        this.router.navigate(['login']);
    }
    LogOut() {
        this.service.logOut(this.response).subscribe((data) => {
            if (data) {
                localStorage.removeItem('userToken');
                localStorage.removeItem('userId');
                this.router.navigate(['/']);
                location.reload();
            }
        });
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