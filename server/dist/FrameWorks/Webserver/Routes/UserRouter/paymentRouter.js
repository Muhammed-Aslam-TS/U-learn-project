"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const paymentServiceInterFace_1 = require("../../../../applications/Services/paymentServiceInterFace");
const PaymentServic_1 = require("../../../Service/PaymentServic");
const PaymentControler_1 = __importDefault(require("../../../../Adapters/Controller/PaymentControler"));
const paymentDb_1 = require("../../../Database/MongoDb/Repositories/paymentDb");
const paymentDbRepo_1 = __importDefault(require("../../../../applications/Repositories/paymentDbRepo"));
const app = express_1.default.Router();
const Controller = (0, PaymentControler_1.default)(paymentDb_1.paymentDatabase, paymentDbRepo_1.default, PaymentServic_1.PaymentService, paymentServiceInterFace_1.PaymentServiceInterFace);
app.post("/placeOrder", Controller.paymentSuccess);
app.get("/AllPurcherseCourse", Controller.gettpurchesedCourses);
app.get("/GetFowllowers", Controller.GetFowllowers);
app.get("/userWallet", Controller.userWallet);
exports.default = app;
