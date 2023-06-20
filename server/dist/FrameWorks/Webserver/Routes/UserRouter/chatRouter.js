"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import io from "../../Middilewear/socketIo";
// import ChatController from "../../../../Adapters/Controller/chatControled";
// import { MessageRepositoryImpl } from "../../../Database/MongoDb/Repositories/chatDb";
// import { ChatReppo } from "../../../../applications/Repositories/ChatReppo";
// import { ChatService } from "../../../Service/ChatService";
// import { ChatServiceInterface } from "../../../../applications/Services/ChatService";
const app = express_1.default.Router();
// const Controller = ChatController(
//     MessageRepositoryImpl,
//     ChatReppo,
//     ChatService,
//     ChatServiceInterface,
// );
// // app.post("/addCourse",Controller.addCourseDatails);
// app.post("/ChattText", Controller.addChatDatails);
// app.post("/chatBox",Controller.StoreChat);
exports.default = app;
