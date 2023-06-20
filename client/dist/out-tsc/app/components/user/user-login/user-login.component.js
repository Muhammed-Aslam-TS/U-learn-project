import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { GoogleAuthProvider } from "@angular/fire/auth";
let UserLoginComponent = class UserLoginComponent {
    constructor(userService, router, formBuilder, http, fireauth) {
        this.userService = userService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.fireauth = fireauth;
        this.token = '';
        this.loginObj = {
            Email: '',
            Password: '',
        };
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            Email: ['', [Validators.required, Validators.email]],
            Password: ['', Validators.required]
        });
    }
    get formControls() {
        return this.form.controls;
    }
    hasError(controlName) {
        const control = this.form.get(controlName);
        return control.touched && control.invalid;
    }
    DoLogin() {
        if (this.form.invalid) {
            return;
        }
        this.loginObj = this.form.value;
        this.userService.DoLogin(this.loginObj).subscribe((data) => {
            if (!data.token) {
                window.alert('Token does not exist');
            }
            else {
                if (data.token) {
                    localStorage.setItem('userToken', data.token);
                    localStorage.setItem('userId', data.User._id);
                    this.router.navigate(['']);
                }
                else {
                    this.router.navigate(['login']);
                }
            }
        });
    }
    signInWithGoogle() {
        this.fireauth.signInWithPopup(new GoogleAuthProvider()).then((res) => {
            const data = res.additionalUserInfo?.profile;
            this.userService.googleSignIn(res).subscribe((respons) => {
                if (!respons.uid) {
                    window.alert('Token does not exist');
                }
                else {
                    if (respons.uid) {
                        localStorage.setItem('userToken', JSON.stringify(respons.uid));
                        localStorage.setItem('userId', JSON.stringify(respons.userId));
                        this.router.navigate(['']);
                    }
                    else {
                        this.router.navigate(['login']);
                    }
                }
            });
        });
    }
};
UserLoginComponent = __decorate([
    Component({
        selector: 'app-user-login',
        templateUrl: './user-login.component.html',
        styleUrls: ['./user-login.component.css']
    })
], UserLoginComponent);
export { UserLoginComponent };
//# sourceMappingURL=user-login.component.js.map