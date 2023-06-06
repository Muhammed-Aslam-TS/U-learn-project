/* eslint-disable no-console */
import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { CourseInterface } from "../../Types/CourseFormInterface";
import { typeOfUserCourseService } from "../../FrameWorks/Service/UserCourseService";
import { typeOfUserCourseServiceInterface } from "../../applications/Services/UserCourseServiceInterface";
import { addCourse } from "../../applications/UseCases/AddCourse/addCourse";
import { TypeOfCourseDb } from "../../FrameWorks/Database/MongoDb/Repositories/AddCoureseDb";
import { typeOfCourseRepo } from "../../applications/Repositories/CourseReppo";
import courseModel from "../../FrameWorks/Database/MongoDb/Models/CorseModel";



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
        const response = await addCourse(CorseData, CourseAddRepo, UserCorseServices);
        res.status(200).json({ message: "Course data received successfully", response });

    });

    const GetallCourses = asyncHandler(async (req: Request, res: Response) => {
        courseModel.find().then((data) => {
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

    return {
        addCourseDatails,
        GetallCourses,
        GetCourses,
        Allcourse
    };
};


export default CourseController;