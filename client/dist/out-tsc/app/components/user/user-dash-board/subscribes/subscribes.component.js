import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SubscribesComponent = class SubscribesComponent {
    constructor(service) {
        this.service = service;
        this.GetFowllowers = [];
        this.Fowllowers = [];
        this.userId = localStorage.getItem("userId");
    }
    ngOnInit() {
        this.service.GetFowllowers(this.userId).subscribe((data) => {
            this.GetFowllowers = data.Fowllowers;
            const uniqueData = [];
            this.GetFowllowers.forEach((element) => {
                const isDuplicate = uniqueData.some((item) => item._id === element._id);
                if (!isDuplicate) {
                    uniqueData.push(element);
                }
            });
            this.Fowllowers = uniqueData;
        });
    }
};
SubscribesComponent = __decorate([
    Component({
        selector: 'app-subscribes',
        templateUrl: './subscribes.component.html',
        styleUrls: ['./subscribes.component.css']
    })
], SubscribesComponent);
export { SubscribesComponent };
//# sourceMappingURL=subscribes.component.js.map