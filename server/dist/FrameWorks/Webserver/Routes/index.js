"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRouter_1 = __importDefault(require("./UserRouter/UserRouter"));
const AddCourseRouter_1 = __importDefault(require("./UserRouter/AddCourseRouter"));
const AdminRouter_1 = __importDefault(require("./AdminRouter/AdminRouter"));
const GetAllUsers_1 = __importDefault(require("./AdminRouter/GetAllUsers"));
const GetallCourses_1 = __importDefault(require("./AdminRouter/GetallCourses"));
const chatRouter_1 = __importDefault(require("./UserRouter/chatRouter"));
const paymentRouter_1 = __importDefault(require("./UserRouter/paymentRouter"));
const Router = (app) => {
    // app.use('/',(req:Request,res:Response)=>{
    //     console.log('helloWorld');
    //    res.end('helloWorld');
    // })
    app.use("/", UserRouter_1.default);
    app.use("/", AddCourseRouter_1.default);
    app.use("/", chatRouter_1.default);
    app.use("/", paymentRouter_1.default);
    app.use("/admin", AdminRouter_1.default);
    app.use("/admin", GetAllUsers_1.default);
    app.use("/admin", GetallCourses_1.default);
};
exports.default = Router;
