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
const storage_1 = require("firebase/storage");
const app_1 = require("firebase/app");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const addCourse_1 = require("../../applications/UseCases/AddCourse/addCourse");
const CorseModel_1 = __importDefault(require("../../FrameWorks/Database/MongoDb/Models/CorseModel"));
const dotenvConfig_1 = __importDefault(require("../../dotenvConfig"));
const UserModel_1 = __importDefault(require("../../FrameWorks/Database/MongoDb/Models/UserModel"));
// import AWS from "aws-sdk";
// import { S3Client } from "@aws-sdk/client-s3";
// const s3 = new S3Client({
//     credentials: {
//         accessKeyId: dotenvConfig.aws_accessKeyId,
//         secretAccessKey: dotenvConfig.aws_secretAccessKey
//     }, 
//     region: dotenvConfig.aws_bucket_name
// });
const firebaseConfig = {
    apiKey: dotenvConfig_1.default.firebase_apiKey,
    authDomain: dotenvConfig_1.default.firebase_authDomain,
    projectId: dotenvConfig_1.default.firebase_projectId,
    storageBucket: dotenvConfig_1.default.firebase_storageBucket,
    messagingSenderId: dotenvConfig_1.default.firebase_messagingSenderId,
    appId: dotenvConfig_1.default.firebase_appId,
    measurementId: dotenvConfig_1.default.firebase_measurementId
};
(0, app_1.initializeApp)(firebaseConfig);
const storage = (0, storage_1.getStorage)();
const CourseController = (CourseDatabase, CourseRepo, UserCorseService, UserCourseServiceInterface) => {
    const CourseAddRepo = CourseRepo(CourseDatabase());
    const UserCorseServices = UserCourseServiceInterface(UserCorseService());
    const addCourseDatails = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        const CorseData = req.body;
        CorseData.Price;
        const storageRef = (0, storage_1.ref)(storage, `u-learn-files/${(_a = req.file) === null || _a === void 0 ? void 0 : _a.originalname}`);
        (0, storage_1.uploadBytes)(storageRef, (_b = req.file) === null || _b === void 0 ? void 0 : _b.buffer).then((snapshort) => __awaiter(void 0, void 0, void 0, function* () {
            const imageUrl = yield (0, storage_1.getDownloadURL)(snapshort.ref);
            const response = yield (0, addCourse_1.addCourse)(imageUrl, CorseData, CourseAddRepo, UserCorseServices);
            res.status(200).json({ message: "Course data received successfully", response });
        }));
    }));
    const GetallCourses = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        CorseModel_1.default.find().find().limit(8).then((data) => {
            res.json(data);
        });
    }));
    const GetCourses = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { userId } = req.query;
        CorseModel_1.default.find({ userId: userId }).sort({ date: -1 }).limit(5).then((data) => {
            res.json(data);
        });
    }));
    const Allcourse = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const courses = yield CorseModel_1.default.find();
        res.json(courses);
    }));
    const GetCourse = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const courseId = req.query.courseId;
        const getCourse = yield CorseModel_1.default.findOne({ _id: courseId });
        const category = getCourse === null || getCourse === void 0 ? void 0 : getCourse.Category;
        const findCategory = yield CorseModel_1.default.find({ Category: category });
        const userId = getCourse === null || getCourse === void 0 ? void 0 : getCourse.userId;
        const user = yield UserModel_1.default.findOne({ _id: userId });
        res.json({ course: getCourse, user, message: true, findCategory });
    }));
    const placeOrderGetDetails = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const courseId = req.query.courseId;
        const getCourse = yield CorseModel_1.default.findOne({ _id: courseId });
        const userId = getCourse === null || getCourse === void 0 ? void 0 : getCourse.userId;
        const user = yield UserModel_1.default.findOne({ _id: userId });
        res.json({ course: getCourse, user, message: true });
    }));
    const getMyCourse = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userId = req.query.userId;
        const MyCourse = yield CorseModel_1.default.find({ userId: userId });
        const user = yield UserModel_1.default.findById({ _id: userId });
        res.json({ MyCourse, user });
    }));
    const removeCourse = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const courseId = req.query.courseId;
        const MyCourse = yield CorseModel_1.default.findOneAndDelete({ _id: courseId });
    }));
    return {
        addCourseDatails,
        GetallCourses,
        GetCourses,
        Allcourse,
        GetCourse,
        placeOrderGetDetails,
        getMyCourse,
        removeCourse
    };
};
exports.default = CourseController;
