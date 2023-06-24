"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CourseSchema = new mongoose_1.default.Schema({
    userId: {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        timestamps: true
    },
    CourseImage: {
        type: String,
        required: true,
    },
    Price: {
        type: Number,
        required: true
    },
    Category: {
        type: String,
        required: true,
    },
    discription: {
        type: String,
        required: true,
    },
    status: {
        tayp: String,
    },
    purtcherserId: {
        type: String
    },
});
const courseModel = mongoose_1.default.model("Course", CourseSchema);
exports.default = courseModel;
