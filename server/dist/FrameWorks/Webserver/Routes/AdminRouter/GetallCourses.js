"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const GetAllCourses_1 = __importDefault(require("../../../../Adapters/AdminController/GetAllCourses"));
const app = express_1.default.Router();
const Controller = (0, GetAllCourses_1.default)();
app.get("/allCourses", Controller.getCourses);
exports.default = app;
