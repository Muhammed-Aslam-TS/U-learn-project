/* eslint-disable no-console */
import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import cookieParser from "cookie-parser";
import courseModel from "../../FrameWorks/Database/MongoDb/Models/CorseModel";

const AdminGetCourseController = (

) => {

    const getCourses = asyncHandler(async (req: Request, res: Response) => {
       const AllCourses = await courseModel.find();
       res.json(AllCourses);
       
    });




    return {
        getCourses,
    };
};


export default AdminGetCourseController;
