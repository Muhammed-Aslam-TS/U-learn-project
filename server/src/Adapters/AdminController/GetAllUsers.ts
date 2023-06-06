/* eslint-disable no-console */
import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import userModel from "../../FrameWorks/Database/MongoDb/Models/UserModel";
import cookieParser from "cookie-parser";

const AdminGetUserController = (

) => {

    const GetAllUsers = asyncHandler(async (req: Request, res: Response) => {
        userModel.find().then((data)=>{    
            res.json(data);
            // console.log(document.cookie,"document.cookie________________________");
        });

       
    });




    return {
        GetAllUsers,
    };
};


export default AdminGetUserController;
