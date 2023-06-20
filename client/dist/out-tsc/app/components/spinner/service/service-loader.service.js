import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ServiceLoaderService = class ServiceLoaderService {
    constructor() {
        this.loading = false;
    }
    setLoading(loading) {
        this.loading = loading;
    }
    getLoading() {
        return this.loading;
    }
};
ServiceLoaderService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ServiceLoaderService);
export { ServiceLoaderService };
//# sourceMappingURL=service-loader.service.js.map