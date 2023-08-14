"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
// // Define the storage for uploaded files
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Specify the destination folder for uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname); // Specify the file name
    }
});
// Create the multer instance with the defined storage
exports.upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
exports.default = exports.upload;
