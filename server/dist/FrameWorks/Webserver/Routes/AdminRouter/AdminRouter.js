"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AdminLogin_1 = __importDefault(require("../../../../Adapters/AdminController/AdminLogin"));
const app = express_1.default.Router();
const Controller = (0, AdminLogin_1.default)();
app.post("/adminLogin", Controller.AdminLogin);
// app.post("/Signup", Controller.adminSignUp); 
exports.default = app;
