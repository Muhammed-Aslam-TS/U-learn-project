import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let NavBarComponent = class NavBarComponent {
    menuDropdown() {
        this.menu = !this.menu;
    }
    constructor(router, service, overlay) {
        this.router = router;
        this.service = service;
        this.overlay = overlay;
        this.isDarkMode = true;
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
        this.setTheme();
    }
    setTheme() {
        const value = localStorage.getItem('isDarkMode');
        if (value) {
            this.isDarkMode = false;
            document.documentElement.classList.add('dark');
        }
    }
    logIn() {
        this.router.navigate(['login']);
    }
    LogOut() {
        console.log(this.response);
        this.service.logOut(this.response).subscribe((data) => {
            console.log(data);
            if (data) {
                localStorage.removeItem('userToken');
                localStorage.removeItem('userId');
                this.router.navigate(['/']);
                location.reload();
            }
        });
    }
    handleToggleClick() {
        if (this.isDarkMode) {
            localStorage.setItem('isDarkMode', 'true');
            document.documentElement.classList.add('dark');
        }
        else {
            localStorage.removeItem('isDarkMode');
            document.documentElement.classList.remove('dark');
        }
        this.isDarkMode = !this.isDarkMode;
    }
};
NavBarComponent = __decorate([
    Component({
        selector: 'app-nav-bar',
        templateUrl: './nav-bar.component.html',
        styleUrls: ['./nav-bar.component.css']
    })
], NavBarComponent);
//# sourceMappingURL=nav-bar.component.js.map