import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { loadStripe } from "@stripe/stripe-js";
export let StripeComponent = class StripeComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.userId = localStorage.getItem('userId');
        this.courseId = localStorage.getItem('courseId');
        this.HolderName = '';
    }
    async ngOnInit() {
        this.stripe = await loadStripe('pk_test_51NHCGGSDjPqbEiAbq6yIFenR8i5e6pTWnQrK18OzSElZaEunGXAHEIIVbnhOCDi8CwWCRpelgjnUPSYLH1lPw6wG00UjnOexzz');
        const elements = this.stripe.elements();
        const card = elements.create('card');
        card.mount('#card');
        card.on('change', (event) => {
            const displayError = document.getElementById('card-errors');
            event.error ? displayError.textContent = event.error.message : displayError.textContent = 'success';
        });
        const button = document.getElementById('button');
        button.addEventListener('click', async (event) => {
            event.preventDefault();
            const ownerInfo = {
                owner: { name: this.HolderName },
                amount: this.parentData.Price,
                currency: 'INR',
            };
            try {
                const result = await this.stripe.createSource(card, ownerInfo);
                this.service.pymentMethord({ data: result, userId: this.userId, courseId: this.courseId }).subscribe((data) => {
                    if (data.response) {
                        this.router.navigate(['/paymentSuccess']);
                    }
                    else {
                        this.router.navigate(['/paymentFaild']);
                    }
                });
            }
            catch (e) {
                console.log(e.message);
            }
        });
    }
};
__decorate([
    Input()
], StripeComponent.prototype, "parentData", void 0);
StripeComponent = __decorate([
    Component({
        selector: 'app-stripe',
        templateUrl: './stripe.component.html',
        styleUrls: ['./stripe.component.css']
    })
], StripeComponent);
//# sourceMappingURL=stripe.component.js.map