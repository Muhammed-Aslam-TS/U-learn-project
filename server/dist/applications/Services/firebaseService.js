"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fireBaseAuthServiceInterFace = void 0;
const fireBaseAuthServiceInterFace = (Service) => {
    const verifyIdToken = (tokenId) => {
        return Service.verifyIdToken(tokenId);
    };
    return {
        verifyIdToken
    };
};
exports.fireBaseAuthServiceInterFace = fireBaseAuthServiceInterFace;
