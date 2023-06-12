/* eslint-disable no-console */
import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { PaymentInterface } from "../../Types/paymentInterFace";
import { typeOfPeymentRepo } from "../../applications/Repositories/paymentDbRepo";
import { TypeOfPaymentDb } from "../../FrameWorks/Database/MongoDb/Repositories/paymentDb";
import { typeOfPaymentServiceInterFace } from "../../applications/Services/paymentServiceInterFace";
import { typeOfPaymentService } from "../../FrameWorks/Service/PaymentServic";
import { PaymentDetails } from "../../applications/UseCases/AddCourse/paymentDetails";
import PaymentModels from "../../FrameWorks/Database/MongoDb/Models/paymentModel";
import courseModel from "../../FrameWorks/Database/MongoDb/Models/CorseModel";
import userModel from "../../FrameWorks/Database/MongoDb/Models/UserModel";




const PaymentController = (
    paymentDatabase: TypeOfPaymentDb,
    paymentRepo: typeOfPeymentRepo,
    PaymentService: typeOfPaymentService,
    paymentServiceInterface: typeOfPaymentServiceInterFace

) => {

    const CourseAddRepo = paymentRepo(paymentDatabase());
    const UserCorseServices = paymentServiceInterface(PaymentService());


    const paymentSuccess = asyncHandler(async (req: Request, res: Response) => {

        const payment = req.body.data;
        const { userId, courseId }: PaymentInterface = req.body;

        const paymentDetails: PaymentInterface = {
            amount: payment.source.amount,
            user: payment.source.owner,
            card: payment.source.card,
            userId: userId,
            courseId: courseId,
            date: new Date
        };

        const status: any = await userModel.findById({ _id: userId });
        const CourseStatus: any = await courseModel.findById({ _id: courseId });

        const purcherseCourses = CourseStatus;
        status.purcherseCourses.push(purcherseCourses);
        await status.save();

        const ownerId = CourseStatus.userId;
        const details: any = await userModel.findOne({ _id: ownerId });
        const fowlloDetails: any = await userModel.findOne({ _id: userId });

        const Fowllowers = fowlloDetails;
        details.Fowllowers.push(Fowllowers);
        await details.save();

        const courseData = await courseModel.findById({ _id: courseId });
        const paymentData = await PaymentModels.findOne({ courseId: courseId });

        const paymetnDetails: any = {
            courseName: courseData?.courseName,
            image: courseData?.CourseImage,
            price: paymentData?.amount,
            date: paymentData?.date,
            status: paymentData?.card.funding,
            last4Digt: paymentData?.card.last4,
            purchaserId: paymentData?.userId
        };
        const price = parseInt(paymetnDetails.price);console.log(price,"price____________________________");
        
        details.walletAmount = parseInt(details.walletAmount) + price;

        const wallet = paymetnDetails;
        details?.wallet.push(wallet);
        await details?.save();

        const response = await PaymentDetails(paymentDetails, CourseAddRepo);
        res.status(200).json({ message: "Payment received successfully", response });
    });


    const gettpurchesedCourses = (async (req: Request, res: Response) => {

        const userId = req.query.userId;
        const response = await userModel.findOne({ _id: userId });
        const purcherseCourses = response?.purcherseCourses;

        res.status(200).json({ message: "purcherseData successfully Geted", purcherseCourses });

    });

    const GetFowllowers = (async (req: Request, res: Response) => {

        const userId = req.query.userId;
        const response = await userModel.findOne({ _id: userId });

        res.status(200).json({ message: "Fowllowers successfully Geted", response });

    });


    const userWallet = (async (req: Request, res: Response) => {

       const userId = req.query.userId;

       const wallet = await userModel.findById({_id:userId});





        console.log(wallet, "wallet___________________________-");


        res.status(200).json({ message: "wallet successfully Geted",wallet });

    });



    return {
        paymentSuccess,
        gettpurchesedCourses,
        GetFowllowers,
        userWallet
    };
};


export default PaymentController;