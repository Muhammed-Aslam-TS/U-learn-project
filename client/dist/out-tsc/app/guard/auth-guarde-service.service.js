import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthGuardeServiceService = class AuthGuardeServiceService {
    IsUserLoggedIn() {
        return !!localStorage.getItem('userToken');
    }
    IsAdminLoggedIn() {
        return !!localStorage.getItem('adminEmail');
    }
};
AuthGuardeServiceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthGuardeServiceService);
export { AuthGuardeServiceService };
//# sourceMappingURL=auth-guarde-service.service.js.map