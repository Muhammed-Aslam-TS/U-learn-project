"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthServiceInterFace = void 0;
const UserAuthServiceInterFace = (Service) => {
    const EncriptPassword = (Password) => {
        return Service.EncriptPassword(Password);
    };
    const CompairePassword = (Password, userPassword) => {
        return Service.CompairePassword(Password, userPassword);
    };
    const GenerateAccessToken = (UserId) => {
        return Service.GenerateAccessToken(UserId);
    };
    const generateRefreshToken = (UserId) => {
        return Service.generateRefreshToken(UserId);
    };
    return {
        EncriptPassword,
        CompairePassword,
        GenerateAccessToken,
        generateRefreshToken
    };
};
exports.UserAuthServiceInterFace = UserAuthServiceInterFace;
