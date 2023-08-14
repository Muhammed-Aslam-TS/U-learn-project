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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRepositoryImpl = void 0;
const MessageEntity_1 = require("../../../Entity/MessageEntity");
class MessageRepositoryImpl {
    saveMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            // Save the message to the database (MongoDB or any other database)
            // eslint-disable-next-line no-console
            console.log(message, "mmmmmmmmmmmmmmmmmmmmmmmmmmm");
            const messageEntity = new MessageEntity_1.MessageEntity(message);
            yield messageEntity.save();
        });
    }
    getChatHistory(senderId, receiverId) {
        return __awaiter(this, void 0, void 0, function* () {
            // Retrieve chat history from the database
            const messages = yield MessageEntity_1.MessageEntity.find({
                $or: [
                    { sender: senderId, receiver: receiverId },
                    { sender: receiverId, receiver: senderId },
                ],
            }).exec();
            return messages.map((message) => message.toDomain());
        });
    }
}
exports.MessageRepositoryImpl = MessageRepositoryImpl;
