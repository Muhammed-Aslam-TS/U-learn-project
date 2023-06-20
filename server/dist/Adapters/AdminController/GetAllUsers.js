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
const UserModel_1 = __importDefault(require("../../FrameWorks/Database/MongoDb/Models/UserModel"));
const AdminGetUserController = () => {
    const GetAllUsers = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        UserModel_1.default.find().then((data) => {
            res.json(data);
            // console.log(document.cookie,"document.cookie________________________");
        });
    }));
    const BlockUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userId = req.query.userId;
        const BlockUser = yield UserModel_1.default.findOne({ _id: userId });
        if ((BlockUser === null || BlockUser === void 0 ? void 0 : BlockUser.blockStatus) === true) {
            const BlockUser = yield UserModel_1.default.findOneAndUpdate({ _id: userId }, { $set: { "blockStatus": false, "Status": "Online" } });
            // const Online = await userModel.findOneAndUpdate({ _id: userId }, { $set: { "Status": "Online" } });
        }
        else {
            const BlockUser = yield UserModel_1.default.findOneAndUpdate({ _id: userId }, { $set: { "blockStatus": true, "Status": "Offline" } });
            // const Offline = await userModel.findOneAndUpdate({ _id: userId }, { $set: { "Status": "Offline" } });
        }
        console.log(BlockUser);
    }));
    return {
        GetAllUsers,
        BlockUser
    };
};
exports.default = AdminGetUserController;
