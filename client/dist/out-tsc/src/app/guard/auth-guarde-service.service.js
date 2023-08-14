import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
export let AuthGuardeServiceService = class AuthGuardeServiceService {
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
//# sourceMappingURL=auth-guarde-service.service.js.map