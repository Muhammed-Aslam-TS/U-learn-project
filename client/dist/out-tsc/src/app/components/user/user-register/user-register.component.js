import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
export let UserRegisterComponent = class UserRegisterComponent {
    constructor(userService, formBuilder, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    ngOnInit() {
        this.signUpForm = this.formBuilder.group({
            Fname: ['', Validators.required],
            Lname: ['', Validators.required],
            Phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
            Email: ['', [Validators.required, Validators.email]],
            CurrentPosition: ['', Validators.required],
            Password: ['', Validators.required],
            ConfirmPassword: ['', Validators.required]
        });
    }
    hasError(controlName) {
        const control = this.signUpForm.get(controlName);
        return control.touched && control.invalid;
    }
    DoSignUp() {
        if (this.signUpForm.invalid) {
            return;
        }
        this.userService.DoSignUp(this.signUpForm.value).subscribe(data => {
            if (data) {
                window.alert('User created');
                this.router.navigate(['login']);
            }
            else {
                window.alert('Creation error');
                this.router.navigate(['signup']);
            }
        }, error => {
            console.log('Error:', error);
        });
    }
};
UserRegisterComponent = __decorate([
    Component({
        selector: 'app-user-register',
        templateUrl: './user-register.component.html',
        styleUrls: ['./user-register.component.css']
    })
], UserRegisterComponent);
//# sourceMappingURL=user-register.component.js.map