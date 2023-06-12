
import express, {  } from "express";
import { PaymentServiceInterFace } from "../../../../applications/Services/paymentServiceInterFace";
import {PaymentService} from "../../../Service/PaymentServic";
import PaymentController from "../../../../Adapters/Controller/PaymentControler";
import { paymentDatabase } from "../../../Database/MongoDb/Repositories/paymentDb";
import PaymentReppo from "../../../../applications/Repositories/paymentDbRepo";



const app = express.Router();

const Controller = PaymentController(
    paymentDatabase,
    PaymentReppo,
    PaymentService,
    PaymentServiceInterFace,
);


app.post("/placeOrder",Controller.paymentSuccess);
app.get("/AllPurcherseCourse",Controller.gettpurchesedCourses);
app.get("/GetFowllowers",Controller.GetFowllowers);
app.get("/userWallet",Controller.userWallet);








export default app;