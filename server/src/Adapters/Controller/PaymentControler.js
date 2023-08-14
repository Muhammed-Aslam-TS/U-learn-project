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
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const paymentDetails_1 = require("../../applications/UseCases/AddCourse/paymentDetails");
const paymentModel_1 = __importDefault(require("../../FrameWorks/Database/MongoDb/Models/paymentModel"));
const CorseModel_1 = __importDefault(require("../../FrameWorks/Database/MongoDb/Models/CorseModel"));
const UserModel_1 = __importDefault(require("../../FrameWorks/Database/MongoDb/Models/UserModel"));
const PaymentController = (paymentDatabase, paymentRepo, PaymentService, paymentServiceInterface) => {
    const CourseAddRepo = paymentRepo(paymentDatabase());
    const UserCorseServices = paymentServiceInterface(PaymentService());
    const paymentSuccess = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const payment = req.body.data;
        const { userId, courseId } = req.body;
        const paymentDetails = {
            amount: payment.source.amount,
            user: payment.source.owner,
            card: payment.source.card,
            userId: userId,
            courseId: courseId,
            date: new Date
        };
        console.log(paymentDetails, "______________________paymentDetails");
        const status = yield UserModel_1.default.findById({ _id: userId });
        const CourseStatus = yield CorseModel_1.default.findById({ _id: courseId });
        const purcherseCourses = CourseStatus;
        status.purcherseCourses.push(purcherseCourses);
        yield status.save();
        const ownerId = CourseStatus.userId;
        const details = yield UserModel_1.default.findOne({ _id: ownerId });
        const fowlloDetails = yield UserModel_1.default.findOne({ _id: userId });
        const Fowllowers = fowlloDetails;
        details.Fowllowers.push(Fowllowers);
        yield details.save();
        const courseData = yield CorseModel_1.default.findById({ _id: courseId });
        const paymentData = yield paymentModel_1.default.findOne({ courseId: courseId });
        console.log(paymentData, "______________________ppppppppppppfh_____");
        const paymetnDetails = {
            courseName: courseData === null || courseData === void 0 ? void 0 : courseData.courseName,
            image: courseData === null || courseData === void 0 ? void 0 : courseData.CourseImage,
            price: paymentDetails.amount,
            date: paymentData === null || paymentData === void 0 ? void 0 : paymentData.date,
            status: paymentData === null || paymentData === void 0 ? void 0 : paymentData.card.funding,
            last4Digt: paymentData === null || paymentData === void 0 ? void 0 : paymentData.card.last4,
            purchaserId: paymentData === null || paymentData === void 0 ? void 0 : paymentData.userId
        };
        const Price = paymetnDetails.price;
        console.log(Price, "paymetnDetails__________________________-");
        console.log(details.wallet.walletAmount, "_______________________________details.wallet.walletAmount");
        details.walletAmount = details.walletAmount + Price;
        console.log(details.walletAmount);
        const wallet = paymetnDetails;
        details === null || details === void 0 ? void 0 : details.wallet.push(wallet);
        yield (details === null || details === void 0 ? void 0 : details.save());
        const response = yield (0, paymentDetails_1.PaymentDetails)(paymentDetails, CourseAddRepo);
        res.status(200).json({ message: "Payment received successfully", response });
    }));
    const gettpurchesedCourses = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userId = req.query.userId;
        const response = yield UserModel_1.default.findOne({ _id: userId }).sort({ date: -1 });
        const purcherseCourses = response === null || response === void 0 ? void 0 : response.purcherseCourses;
        res.status(200).json({ message: "purcherseData successfully Geted", purcherseCourses });
    }));
    const GetFowllowers = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userId = req.query.userId;
        const response = yield UserModel_1.default.findOne({ _id: userId });
        const Fowllowers = response === null || response === void 0 ? void 0 : response.Fowllowers;
        res.status(200).json({ message: "Fowllowers successfully Geted", Fowllowers });
    }));
    const userWallet = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userId = req.query.userId;
        const wallet = yield UserModel_1.default.findById({ _id: userId });
        res.status(200).json({ message: "wallet successfully Geted", wallet });
    }));
    return {
        paymentSuccess,
        gettpurchesedCourses,
        GetFowllowers,
        userWallet
    };
};
exports.default = PaymentController;
