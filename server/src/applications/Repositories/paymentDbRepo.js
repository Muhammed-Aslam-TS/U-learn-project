"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PaymentRepo = (Repository) => {
    const paymentDetails = (paymentDetails) => {
        return Repository.PaymentDetails(paymentDetails);
    };
    return {
        paymentDetails
    };
};
exports.default = PaymentRepo;
