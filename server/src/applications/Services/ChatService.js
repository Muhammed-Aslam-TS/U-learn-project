"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatServiceInterface = void 0;
const ChatServiceInterface = (Service) => {
    const SaveChat = (data) => {
        return Service.StoreChat(data);
    };
    return {
        SaveChat
    };
};
exports.ChatServiceInterface = ChatServiceInterface;
