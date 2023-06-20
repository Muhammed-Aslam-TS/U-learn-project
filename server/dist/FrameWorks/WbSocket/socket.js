"use strict";
/* eslint-disable no-console */
Object.defineProperty(exports, "__esModule", { value: true });
const socketConfig = (io) => {
    io.on("connection", (socket) => {
        console.log("User connected");
        socket.on("disconnect", () => {
            console.log("User disconnected");
        });
        socket.on("chatMessage", (message) => {
            console.log(message, "jjjjjjjjjjjjjjjjjjjjjjjjjjjj");
            // Handle the received chat message and send it to the appropriate recipient(s)
            // ...
            socket.broadcast.emit("chatMessage", message);
        });
    });
};
exports.default = socketConfig;
