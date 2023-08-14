import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
export let ServiceLoaderService = class ServiceLoaderService {
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
//# sourceMappingURL=service-loader.service.js.map