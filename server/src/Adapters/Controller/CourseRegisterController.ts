/* eslint-disable no-console */
import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { CourseInterface } from "../../Types/CourseFormInterface";
import { typeOfUserCourseService } from '../../FrameWorks/Service/UserCourseService';
import { typeOfUserCourseServiceInterface } from '../../applications/Services/UserCourseServiceInterface';
import { addCourse } from "../../applications/UseCases/AddCourse/addCourse";
import { TypeOfCourseDb } from "../../FrameWorks/Database/MongoDb/Repositories/AddCoureseDb";
import { typeOfCourseRepo } from "../../applications/Repositories/CourseReppo";





const CourseController = (
    CourseDatabase: TypeOfCourseDb,
    CourseRepo: typeOfCourseRepo,
    UserCorseService: typeOfUserCourseService,
    UserCourseServiceInterface: typeOfUserCourseServiceInterface

) => {

    const CourseAddRepo = CourseRepo(CourseDatabase());
    const UserCorseServices = UserCourseServiceInterface(UserCorseService());

    const addCourseDatails = asyncHandler(async (req: Request, res: Response) => {
        const CorseData: CourseInterface = req.body
        console.log(CorseData, 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
        const response = await addCourse(CorseData,CourseAddRepo,UserCorseServices)

    });

    const textEditor = asyncHandler (async(req:Request,res:Response)=>{
        const TextEditor = req.body
        console.log(TextEditor, 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
    })

    return {
        addCourseDatails,
        textEditor
    };
};


export default CourseController;