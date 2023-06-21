"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Server_1 = __importDefault(require("./FrameWorks/Webserver/Server"));
const Routes_1 = __importDefault(require("./FrameWorks/Webserver/Routes"));
const Connection_1 = __importDefault(require("./FrameWorks/Database/MongoDb/Connection/Connection"));
const Express_1 = __importDefault(require("./FrameWorks/Webserver/Express"));
// import { ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData } from "./Types/SocketInterface";
const socket_1 = __importDefault(require("./FrameWorks/WbSocket/socket"));
const socket_io_1 = require("socket.io");
// import http from "http";
const http_1 = require("http");
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "*",
        // methods:["GET","POST"]
    },
    path: "/socket.io/"
});
//connecting mongoDb
(0, socket_1.default)(io);
(0, Connection_1.default)();
(0, Server_1.default)(server);
(0, Express_1.default)(app);
(0, Routes_1.default)(app);
exports.default = app;
