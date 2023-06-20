import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RegisterComponent = class RegisterComponent {
    constructor(service, formBuilder, router) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.router = router;
        // ngOnInit() {
        //   this.signUpForm = this.formBuilder.group({
        //     FirstName: ['', Validators.required],
        //     LastName: ['', Validators.required],
        //     YourEmail: ['', [Validators.required, Validators.email]],
        //     YourPhone: ['', Validators.required],
        //     YourPassword: ['', [Validators.required, Validators.minLength(6)]],
        //     ConfirmPassword: ['', Validators.required]
        //   });
        // }
        this.signupObj = {
            FullName: '',
            Email: '',
            Phone: '',
            Password: '',
        };
    }
    DoSignUp() {
        this.service.DoSignUp(this.signupObj).subscribe(data => {
            if (data) {
                window.alert("user created");
                this.router.navigate(['login']);
            }
            else {
                window.alert("creation error");
                this.router.navigate(['signup']);
            }
        });
    }
};
RegisterComponent = __decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map