"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserReppo = (Repository) => {
    const DoSignUP = (userData) => { return Repository.DoSignUP(userData); };
    const findByEmail = (Email) => { return Repository.findByEmail(Email); };
    return {
        DoSignUP,
        findByEmail
    };
};
exports.default = UserReppo;
