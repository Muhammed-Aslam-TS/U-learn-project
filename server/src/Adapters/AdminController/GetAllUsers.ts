/* eslint-disable no-console */
import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import userModel from "../../FrameWorks/Database/MongoDb/Models/UserModel";
import cookieParser from "cookie-parser";
import { UserAuthServiceInterFace } from "../../applications/Services/UserAuthserviceInterFacw";

const AdminGetUserController = (

) => {

    const GetAllUsers = asyncHandler(async (req: Request, res: Response) => {
        userModel.find().then((data) => {
            res.json(data);
            // console.log(document.cookie,"document.cookie________________________");
        });


    });

    const BlockUser = asyncHandler(async (req: Request, res: Response) => {
        const userId = req.query.userId;
        const BlockUser = await userModel.findOne({ _id: userId });
        if (BlockUser?.blockStatus === true) {
            const BlockUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { "blockStatus": false ,"Status": "Online" } });
            // const Online = await userModel.findOneAndUpdate({ _id: userId }, { $set: { "Status": "Online" } });

        } else {
            const BlockUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { "blockStatus": true ,"Status": "Offline" } });
            // const Offline = await userModel.findOneAndUpdate({ _id: userId }, { $set: { "Status": "Offline" } });

        }

        console.log(BlockUser);

    });


    return {
        GetAllUsers,
        BlockUser
    };
};


export default AdminGetUserController;
