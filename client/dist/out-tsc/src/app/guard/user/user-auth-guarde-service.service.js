import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
export let UserAuthGuardeServiceService = class UserAuthGuardeServiceService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (this.auth.IsUserLoggedIn()) {
            return true;
        }
        this.router.navigate(['']);
        return false;
    }
};
UserAuthGuardeServiceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserAuthGuardeServiceService);
//# sourceMappingURL=user-auth-guarde-service.service.js.map