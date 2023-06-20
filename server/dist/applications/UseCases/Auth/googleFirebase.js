"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleData = exports.googleLogin = void 0;
const googleLogin = (userData, UserDb) => __awaiter(void 0, void 0, void 0, function* () {
    const User = yield UserDb.GoogleSignUP(userData);
    return {
        User
    };
});
exports.googleLogin = googleLogin;
const googleData = (UserDb, userData) => __awaiter(void 0, void 0, void 0, function* () {
    const googleData = yield UserDb.findUid(userData);
    return {
        googleData
    };
});
exports.googleData = googleData;
