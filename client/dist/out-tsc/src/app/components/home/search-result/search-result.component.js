import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let SearchResultComponent = class SearchResultComponent {
    modalHandler(val) {
        const modal = document.getElementById("modal");
        const button = document.getElementById("button");
        if (val) {
            modal.classList.remove("hidden");
            button.classList.add("hidden");
        }
        else {
            modal.classList.add("hidden");
            button.classList.remove("hidden");
        }
    }
};
SearchResultComponent = __decorate([
    Component({
        selector: 'app-search-result',
        templateUrl: './search-result.component.html',
        styleUrls: ['./search-result.component.css']
    })
], SearchResultComponent);
//# sourceMappingURL=search-result.component.js.map