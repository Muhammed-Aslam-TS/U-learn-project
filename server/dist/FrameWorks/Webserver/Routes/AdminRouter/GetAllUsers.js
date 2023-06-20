"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const GetAllUsers_1 = __importDefault(require("../../../../Adapters/AdminController/GetAllUsers"));
const app = express_1.default.Router();
const Controller = (0, GetAllUsers_1.default)();
app.get("/allUsers", Controller.GetAllUsers);
app.put("/BlockUser", Controller.BlockUser);
exports.default = app;
