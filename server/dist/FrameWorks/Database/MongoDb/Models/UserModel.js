"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const UserSchema = new mongoose_1.default.Schema({
    Fname: {
        type: String,
        // required: true,
    },
    Lname: {
        type: String,
        // required: true,
    },
    Email: {
        type: String,
        // required: true,
        unique: true,
        lowercase: true,
        validator: [validator_1.default.isEmail, "Invalid Email"]
    },
    Phone: {
        type: Number,
        // required: true,
        // unique:true,
        validator: [
            {
                validator: function (value) {
                    return /^\d{10}$/.test(value);
                },
                message: "Invalid Number"
            }
        ]
    },
    CurrentPosition: {
        type: String,
        // required: true,
    },
    Password: {
        type: String,
        // required: true,
    },
    ConfirmPassword: {
        type: String,
        // required: true,
    },
    Status: {
        type: String,
    },
    purcherseCourses: {
        type: Array
    },
    Fowllowers: {
        type: Array
    },
    wallet: {
        type: Array
    },
    walletAmount: {
        type: Number
    },
    blockStatus: {
        type: Boolean
    },
    uid: {
        type: String
    },
    image: {
        type: String
    }
});
const userModel = mongoose_1.default.model("users", UserSchema);
exports.default = userModel;
