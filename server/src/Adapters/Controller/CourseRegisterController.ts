/* eslint-disable no-console */
import { Request, Response } from "express";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { initializeApp } from "firebase/app";
import asyncHandler from "express-async-handler";
import { CourseInterface } from "../../Types/CourseFormInterface";
import { typeOfUserCourseService } from "../../FrameWorks/Service/UserCourseService";
import { typeOfUserCourseServiceInterface } from "../../applications/Services/UserCourseServiceInterface";
import { addCourse } from "../../applications/UseCases/AddCourse/addCourse";
import { TypeOfCourseDb } from "../../FrameWorks/Database/MongoDb/Repositories/AddCoureseDb";
import { typeOfCourseRepo } from "../../applications/Repositories/CourseReppo";
import courseModel from "../../FrameWorks/Database/MongoDb/Models/CorseModel";
import dotenvConfig from "../../dotenvConfig";
import admin from "firebase-admin";
import userModel from "../../FrameWorks/Database/MongoDb/Models/UserModel";
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
    apiKey: dotenvConfig.firebase_apiKey,
    authDomain: dotenvConfig.firebase_authDomain,
    projectId: dotenvConfig.firebase_projectId,
    storageBucket: dotenvConfig.firebase_storageBucket,
    messagingSenderId: dotenvConfig.firebase_messagingSenderId,
    appId: dotenvConfig.firebase_appId,
    measurementId: dotenvConfig.firebase_measurementId
};

initializeApp(firebaseConfig);

const storage = getStorage();


const CourseController = (
    CourseDatabase: TypeOfCourseDb,
    CourseRepo: typeOfCourseRepo,
    UserCorseService: typeOfUserCourseService,
    UserCourseServiceInterface: typeOfUserCourseServiceInterface

) => {

    const CourseAddRepo = CourseRepo(CourseDatabase());
    const UserCorseServices = UserCourseServiceInterface(UserCorseService());

    const addCourseDatails = asyncHandler(async (req: Request, res: Response) => {
        const CorseData: CourseInterface = req.body;
        CorseData.Price as number;
        console.log(CorseData);

        const storageRef = ref(storage, `u-learn-files/${req.file?.originalname}`);

        uploadBytes(storageRef, req.file?.buffer as Buffer).then(async (snapshort) => {
            console.log("file uploded________");
            const imageUrl = await getDownloadURL(snapshort.ref);

            const response = await addCourse(imageUrl, CorseData, CourseAddRepo, UserCorseServices);
            res.status(200).json({ message: "Course data received successfully", response });
        });
    });



    const GetallCourses = asyncHandler(async (req: Request, res: Response) => {
        courseModel.find().find().limit(6).then((data) => {
            res.json(data);
        });
    });

    const GetCourses = asyncHandler(async (req: Request, res: Response) => {
        const { userId } = req.query;
        courseModel.find({ userId: userId }).limit(5).then((data) => {
            res.json(data);
        });
    });

    const Allcourse = asyncHandler(async (req: Request, res: Response) => {
        const courses = await courseModel.find();
        res.json(courses);
    });

    const GetCourse = asyncHandler(async (req: Request, res: Response) => {

        const courseId = req.query.courseId;
        const getCourse = await courseModel.findOne({ _id: courseId });
        console.log(getCourse?.userId);

        const userId = getCourse?.userId;
        const user = await userModel.findOne({ _id: userId });
        console.log(getCourse);
        res.json({ course: getCourse, user, message: true });
    });

    const placeOrderGetDetails = asyncHandler(async (req: Request, res: Response) => {
        const courseId = req.query.courseId;
        const getCourse = await courseModel.findOne({ _id: courseId });
        console.log(getCourse?.userId);

        const userId = getCourse?.userId;
        const user = await userModel.findOne({ _id: userId });
        console.log(getCourse);
        res.json({ course: getCourse, user, message: true });
    });

    const paymentSuccess = asyncHandler(async (req: Request, res: Response)=>{
        console.log(req.body,"payment detiaol");
        
    });

    return {
        addCourseDatails,
        GetallCourses,
        GetCourses,
        Allcourse,
        GetCourse,
        placeOrderGetDetails,
        paymentSuccess
    };
};


export default CourseController;