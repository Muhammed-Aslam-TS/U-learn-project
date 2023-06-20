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
const AdminModels_1 = __importDefault(require("../../FrameWorks/Database/MongoDb/Models/AdminModels"));
// const adminData = {
//     FullName: "U-learn-Admin",
//     Email: "admin@gmail.com",
//     Password: "admin123",
// };
const AdminController = () => {
    const AdminLogin = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const admin = yield AdminModels_1.default.findOne({ Email: req.body.Email });
        const { Email, Password } = req.body;
        if ((admin === null || admin === void 0 ? void 0 : admin.Email) === Email && (admin === null || admin === void 0 ? void 0 : admin.Password) === Password) {
            console.log("admin login success");
            const AdminData = {
                Email: admin === null || admin === void 0 ? void 0 : admin.Email,
                Password: admin === null || admin === void 0 ? void 0 : admin.Password,
                status: true,
                message: "admin exist"
            };
            res.status(200).json({ status: true, message: "admin exist", admin: AdminData });
        }
        else {
            console.log("login failure...................!");
            res.status(400).json({ status: false, message: "incorrect password" });
        }
    }));
    return {
        AdminLogin,
    };
};
exports.default = AdminController;
