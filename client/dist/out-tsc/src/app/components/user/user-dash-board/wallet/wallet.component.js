import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let WalletComponent = class WalletComponent {
    constructor(service, postService) {
        this.service = service;
        this.postService = postService;
        this.page = 1;
        this.count = 0;
        this.tableSize = 7;
        this.tableSizes = [3, 6, 9, 12];
        this.userId = localStorage.getItem('userId');
    }
    ngOnInit() {
        this.fetchPosts();
        this.service.getWallet(this.userId).subscribe((data) => {
            console.log(data);
            this.walletHistory = data.wallet.wallet;
            this.walletAmount = data.wallet.walletAmount;
        });
    }
    fetchPosts() {
        this.postService.getAllPosts().subscribe((response) => {
            this.POSTS = response;
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }
    onTableDataChange(event) {
        this.page = event;
        this.fetchPosts();
    }
    onTableSizeChange(event) {
        this.tableSize = event.target.value;
        this.page = 1;
        this.fetchPosts();
    }
};
WalletComponent = __decorate([
    Component({
        selector: 'app-wallet',
        templateUrl: './wallet.component.html',
        styleUrls: ['./wallet.component.css']
    })
], WalletComponent);
//# sourceMappingURL=wallet.component.js.map