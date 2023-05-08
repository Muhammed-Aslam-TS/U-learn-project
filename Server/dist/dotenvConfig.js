"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dotenvConfig = {
    access_token_key: process.env.JWT_ACCESS_TOKEN_KEY,
    refresh_token_key: process.env.JWT_REFRESH_TOKEN_KEY,
};
exports.default = dotenvConfig;
