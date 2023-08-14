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
                yield UserModel_1.default.findOneAndUpdate({ _id: UserId }, { Status: "Online" });
            }
            res.cookie("refreshtoken", response.refreshToken, { httpOnly: true });
            res.json(response);
        }
    }));
    const logOut = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const UserId = req.body.response.userId;
        const user = yield UserModel_1.default.findOneAndUpdate({ _id: UserId }, { $set: { Status: "Offline" } });
        res.json(user);
    }));
    const GoogleSignUp = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const user = req.body.data.user;
        // const uid = user.uid;
        const userexist = yield UserModel_1.default.findOne({ uid: user.uid });
        if (!userexist) {
            console.log("this function is ok");
            const userData = {
                uid: user.uid,
                Fname: user.displayName,
                Email: user.email,
                image: user.photoURL,
                Status: "",
                Phone: 0,
                CurrentPosition: "",
                Password: "",
                ConfirmPassword: "",
                blockStatus: false
            };
            console.log(userData);
            yield (0, UserRegister_1.addUser)(userData, UserdbRepo, UserAuthServices);
            const userexist = yield UserModel_1.default.findOne({ uid: user.uid });
            const UserId = userexist === null || userexist === void 0 ? void 0 : userexist._id;
            if (UserId) {
                yield UserModel_1.default.findOneAndUpdate({ _id: UserId }, { Status: "Online" });
            }
            if (user.email === (userexist === null || userexist === void 0 ? void 0 : userexist.Email)) {
                const response = { email: userexist === null || userexist === void 0 ? void 0 : userexist.Email, uid: userexist === null || userexist === void 0 ? void 0 : userexist.uid, userId: UserId };
                res.json(response);
            }
            else {
                const response = yield (0, googleFirebase_1.googleLogin)(userexist, UserdbRepo);
                res.json(response);
            }
        }
        else {
            const userexist = yield UserModel_1.default.findOne({ uid: user.uid });
            const UserId = userexist === null || userexist === void 0 ? void 0 : userexist._id;
            if (UserId) {
                yield UserModel_1.default.findOneAndUpdate({ _id: UserId }, { Status: "Online" });
            }
            if (user.email === (userexist === null || userexist === void 0 ? void 0 : userexist.Email)) {
                const response = { email: userexist === null || userexist === void 0 ? void 0 : userexist.Email, uid: userexist === null || userexist === void 0 ? void 0 : userexist.uid, userId: UserId };
                res.json(response);
            }
            else {
                const response = yield (0, googleFirebase_1.googleLogin)(userexist, UserdbRepo);
                res.json(response);
            }
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
    const getUserDetailsEdit = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = req.body;
        const userId = data.userId;
        console.log(data);
        yield UserModel_1.default.findOneAndUpdate({ _id: userId }, { $set: { Fname: data.Fname, Lname: data.Lname, Email: data.Email, Phone: data.Phone } });
        res.json({ message: "this user is updated" });
    }));
    return {
        DoSignup,
        DoLogin,
        GoogleSignUp,
        logOut,
        SerchDataData,
        getUserDetails,
        getUserDetailsEdit
    };
};
exports.default = UserController;
