import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
export let UserUnAuthGuardeServiceService = class UserUnAuthGuardeServiceService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (!this.auth.IsUserLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
};
UserUnAuthGuardeServiceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserUnAuthGuardeServiceService);
//# sourceMappingURL=user-un-auth-guarde-service.service.js.map