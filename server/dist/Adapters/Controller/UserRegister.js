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
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const UserRegister_1 = require("../../applications/UseCases/Auth/UserRegister");
const googleFirebase_1 = require("../../applications/UseCases/Auth/googleFirebase");
const UserModel_1 = __importDefault(require("../../FrameWorks/Database/MongoDb/Models/UserModel"));
const googleAuthModel_1 = __importDefault(require("../../FrameWorks/Database/MongoDb/Models/googleAuthModel"));
const CorseModel_1 = __importDefault(require("../../FrameWorks/Database/MongoDb/Models/CorseModel"));
const UserController = (UserDatabase, UserRepo, UserAuthservice, UserAuthServiceInterface) => {
    const UserdbRepo = UserRepo(UserDatabase());
    const UserAuthServices = UserAuthServiceInterface(UserAuthservice());
    const DoSignup = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const UserData = req.body;
        const Response = yield (0, UserRegister_1.addUser)(UserData, UserdbRepo, UserAuthServices);
        res.json(Response);
    }));
    const DoLogin = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { Email, Password } = req.body;
        const isUserBlocked = yield UserModel_1.default.findOne({ Email: Email });
        console.log(isUserBlocked);
        if ((isUserBlocked === null || isUserBlocked === void 0 ? void 0 : isUserBlocked.blockStatus) === true) {
            res.json({ message: "this Account is Blocked" });
        }
        else {
            const response = yield (0, UserRegister_1.userLogin)(Email, Password, UserdbRepo, UserAuthServices);
            const UserId = response.User._id;
            if (UserId) {
                const user = yield UserModel_1.default.findOneAndUpdate({ _id: UserId }, { Status: "Online" });
            }
            res.cookie("refreshtoken", response.refreshToken, { httpOnly: true });
            console.log(response, "controller_____________________");
            res.json(response);
        }
    }));
    const logOut = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(req.body, "b___________________");
        const userId = req.body.response.userId;
        const user = yield UserModel_1.default.findOneAndUpdate({ _id: userId }, { $set: { Status: "Offline" } });
        console.log(user, "status____________________");
        res.json(user);
    }));
    const GoogleSignUp = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        const user = req.body.data.user;
        const userData = {
            uid: user.uid,
            userName: user.displayName,
            email: user.email,
            image: user.photoURL,
            Status: ""
        };
        const GoogleUser = yield (0, googleFirebase_1.googleData)(UserdbRepo, userData);
        const UserId = (_a = GoogleUser.googleData) === null || _a === void 0 ? void 0 : _a._id;
        if (UserId) {
            const user = yield googleAuthModel_1.default.findOneAndUpdate({ _id: UserId }, { Status: "Online" });
        }
        if (userData.email === ((_b = GoogleUser.googleData) === null || _b === void 0 ? void 0 : _b.email)) {
            const response = { email: (_c = GoogleUser.googleData) === null || _c === void 0 ? void 0 : _c.email, uid: (_d = GoogleUser.googleData) === null || _d === void 0 ? void 0 : _d.uid, userId: UserId };
            res.json(response);
        }
        else {
            const response = yield (0, googleFirebase_1.googleLogin)(userData, UserdbRepo);
            res.json(response);
        }
    }));
    const SerchDataData = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const SearchString = req.body.formData;
            const courseSearchData = yield CorseModel_1.default.find({ courseName: { $regex: SearchString, $options: "i" } });
            console.log(courseSearchData);
            res.json(courseSearchData);
        }
        catch (error) {
            console.log(error);
        }
    }));
    const getUserDetails = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userId = req.query.userId;
            const user = yield UserModel_1.default.findOne({ _id: userId });
            res.json(user);
        }
        catch (error) {
            console.log(error);
        }
    }));
    return {
        DoSignup,
        DoLogin,
        GoogleSignUp,
        logOut,
        SerchDataData,
        getUserDetails
    };
};
exports.default = UserController;
