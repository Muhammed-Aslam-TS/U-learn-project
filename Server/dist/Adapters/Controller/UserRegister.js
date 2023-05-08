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
const UserController = (UserDatabase, UserRepo, UserAuthservice, UserAuthServiceInterface) => {
    const UserdbRepo = UserRepo(UserDatabase());
    const UserAuthServices = UserAuthServiceInterface(UserAuthservice());
    const Dosignup = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const UserData = req.body;
        const Response = yield (0, UserRegister_1.addUser)(UserData, UserdbRepo, UserAuthServices);
        res.json(Response);
    }));
    const DoLogin = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let { Email, Password } = req.body;
        const response = yield (0, UserRegister_1.userLogin)(Email, Password, UserdbRepo, UserAuthServices);
    }));
    return {
        Dosignup,
        DoLogin
    };
};
exports.default = UserController;
