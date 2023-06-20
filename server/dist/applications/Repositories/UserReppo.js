"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserReppo = (Repository) => {
    const DoSignUP = (userData) => { return Repository.DoSignUP(userData); };
    const findByEmail = (Email) => { return Repository.findByEmail(Email); };
    const GoogleSignUP = (userData) => { return Repository.googleSignUp(userData); };
    const findUid = (userData) => { return Repository.findGoogleData(userData); };
    return {
        DoSignUP,
        findByEmail,
        GoogleSignUP,
        findUid
    };
};
exports.default = UserReppo;
