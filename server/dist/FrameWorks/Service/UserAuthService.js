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
exports.UserAuthService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenvConfig_1 = __importDefault(require("../../dotenvConfig"));
const UserAuthService = () => {
    const EncriptPassword = (Password) => __awaiter(void 0, void 0, void 0, function* () {
        const password = yield bcrypt_1.default.hash(Password, 10);
        return password;
    });
    const CompairePassword = (Password, EncriptPassword) => __awaiter(void 0, void 0, void 0, function* () {
        const Status = yield bcrypt_1.default.compare(Password, EncriptPassword);
        return Status;
    });
    const GenerateAccessToken = (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const token = yield jsonwebtoken_1.default.sign({ payload }, dotenvConfig_1.default.access_token_key, { expiresIn: "30s" });
        return token;
    });
    const generateRefreshToken = (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const token = yield jsonwebtoken_1.default.sign({ payload }, dotenvConfig_1.default.refresh_token_key, { expiresIn: "1h" });
        return token;
    });
    const verifyRefreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield jsonwebtoken_1.default.verify(token, dotenvConfig_1.default.refresh_token_key);
        return response;
    });
    const verifyAccessToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
        return jsonwebtoken_1.default.verify(token, dotenvConfig_1.default.access_token_key);
    });
    return {
        EncriptPassword,
        CompairePassword,
        GenerateAccessToken,
        generateRefreshToken,
        verifyRefreshToken,
        verifyAccessToken
    };
};
exports.UserAuthService = UserAuthService;
