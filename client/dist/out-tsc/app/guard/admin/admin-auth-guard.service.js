import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AdminAuthGuardService = class AdminAuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (this.auth.IsAdminLoggedIn()) {
            return true;
        }
        this.router.navigate(['admin/login']);
        return false;
    }
};
AdminAuthGuardService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AdminAuthGuardService);
export { AdminAuthGuardService };
//# sourceMappingURL=admin-auth-guard.service.js.map