"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
// const Io = sockeIo(server)
const corsOption = {
    // origin:"http://localhost:4200",
    origin: ["https://ulearn.shop", "https://www.ulearn.shop"],
    methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
    credentials: true,
};
const ExpressConfig = (app) => {
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((0, cookie_parser_1.default)());
    app.use((0, morgan_1.default)("dev"));
    app.use(express_1.default.static("public"));
    app.use((0, compression_1.default)());
    app.use((0, cors_1.default)(corsOption));
};
exports.default = ExpressConfig;
