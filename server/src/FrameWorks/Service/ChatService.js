"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const ChatService = () => {
    // eslint-disable-next-line no-console
    const StoreChat = (data) => {
        // eslint-disable-next-line no-console
        console.log(data, "course service vannu");
        return data;
    };
    return {
        StoreChat
    };
};
exports.ChatService = ChatService;
