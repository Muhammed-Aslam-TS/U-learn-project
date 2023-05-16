"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRouter_1 = __importDefault(require("./UserRouter/UserRouter"));
const Router = (app) => {
    // app.use('/',(req:Request,res:Response)=>{
    //     console.log('helloWorld');
    //    res.end('helloWorld');
    // })
    app.use('/', UserRouter_1.default);
    // app.use('/',login)
};
exports.default = Router;
