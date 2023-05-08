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
exports.userLogin = exports.addUser = void 0;
const httpStatus_1 = require("../../../Types/httpStatus");
const AppError_1 = __importDefault(require("../../../Utils/AppError"));
const addUser = (UserData, UserDb, UserAuthService) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    UserData.Email = (_a = UserData.Email) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    UserData.Password = yield UserAuthService.EncriptPassword(UserData.Password);
    UserData.ConformPassword = yield UserAuthService.EncriptPassword(UserData.ConformPassword);
    const User = UserDb.DoSignUP(UserData);
    return {
        User
    };
});
exports.addUser = addUser;
const userLogin = (Email, Password, UserDb, UserAuthService) => __awaiter(void 0, void 0, void 0, function* () {
    const User = yield UserDb.findByEmail(Email);
    console.log(User, 'user und');
    if (!User) {
        throw new AppError_1.default("this user does't exist", httpStatus_1.HttpStatus.UNAUTHORIZED);
    }
    else {
        const Authenticat = yield UserAuthService.CompairePassword(Password, User.Password);
        if (!Authenticat) {
            throw new AppError_1.default("Sory,  Password entered incorrectly", httpStatus_1.HttpStatus.UNAUTHORIZED);
        }
        const token = yield UserAuthService.GenerateAccessToken(User._id);
    }
});
exports.userLogin = userLogin;
