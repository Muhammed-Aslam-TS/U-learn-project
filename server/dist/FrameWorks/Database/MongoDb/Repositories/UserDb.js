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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDatabase = void 0;
/* eslint-disable no-console */
const UserModel_1 = __importDefault(require("../Models/UserModel"));
const googleAuthModel_1 = __importDefault(require("../Models/googleAuthModel"));
function UserDatabase() {
    const DoSignUP = (userData) => __awaiter(this, void 0, void 0, function* () {
        userData.Status = "Offline";
        userData.walletAmount = 0;
        userData.blockStatus = false;
        const User = yield UserModel_1.default.create(userData);
        return User;
    });
    const findByEmail = (Email) => __awaiter(this, void 0, void 0, function* () {
        const User = yield UserModel_1.default.findOne({ "Email": Email });
        return User;
    });
    const googleSignUp = (userData) => __awaiter(this, void 0, void 0, function* () {
        console.log("gooleSignup");
        userData.Status = "Offline";
        const User = yield UserModel_1.default.create(userData);
        return User;
    });
    const findGoogleData = (userData) => __awaiter(this, void 0, void 0, function* () {
        const Email = userData.email;
        const googleData = yield googleAuthModel_1.default.findOne({ "email": Email });
        return googleData;
    });
    return {
        DoSignUP,
        findByEmail,
        googleSignUp,
        findGoogleData
    };
}
exports.UserDatabase = UserDatabase;
