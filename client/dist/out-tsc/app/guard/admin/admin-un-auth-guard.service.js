import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AdminUnAuthGuardService = class AdminUnAuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (!this.auth.IsAdminLoggedIn()) {
            return true;
        }
        this.router.navigate(['admin/dashBoard']);
        return false;
    }
};
AdminUnAuthGuardService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AdminUnAuthGuardService);
export { AdminUnAuthGuardService };
//# sourceMappingURL=admin-un-auth-guard.service.js.map