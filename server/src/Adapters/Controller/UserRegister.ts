/* eslint-disable no-console */
import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { GoogleUserInterface, UserInterFace } from "../../Types/UserInterFace";
import { TypeOfUserDb } from "../../FrameWorks/Database/MongoDb/Repositories/UserDb";
import { typeOfUserRepo } from "../../applications/Repositories/UserReppo";
import { addUser, userLogin } from "../../applications/UseCases/Auth/UserRegister";
import { typeOfUserAuthService } from "../../FrameWorks/Service/UserAuthService";
import { typeOfUserAuthServiceInterFace } from "../../applications/Services/UserAuthserviceInterFacw";
import { googleData, googleLogin } from "../../applications/UseCases/Auth/googleFirebase";
import userModel from "../../FrameWorks/Database/MongoDb/Models/UserModel";
import GoogleUserModel from "../../FrameWorks/Database/MongoDb/Models/googleAuthModel";
import courseModel from "../../FrameWorks/Database/MongoDb/Models/CorseModel";
import { ObjectId, Types, isValidObjectId } from "mongoose";
import mongoose from "mongoose";


const UserController = (
    UserDatabase: TypeOfUserDb,
    UserRepo: typeOfUserRepo,
    UserAuthservice: typeOfUserAuthService,
    UserAuthServiceInterface: typeOfUserAuthServiceInterFace

) => {
    const UserdbRepo = UserRepo(UserDatabase());
    const UserAuthServices = UserAuthServiceInterface(UserAuthservice());

    const DoSignup = asyncHandler(async (req: Request, res: Response) => {
        const UserData: UserInterFace = req.body;

        const Response: unknown = await addUser(UserData, UserdbRepo, UserAuthServices);
        res.json(Response);

    });

    const DoLogin = asyncHandler(async (req: Request, res: Response) => {

        const { Email, Password }: UserInterFace = req.body;
        const isUserBlocked = await userModel.findOne({ Email: Email });
        console.log(isUserBlocked);

        if (isUserBlocked?.blockStatus === true) {
            res.json({ message: "this Account is Blocked" });
        } else {
            const response = await userLogin(Email, Password, UserdbRepo, UserAuthServices);
            const UserId = response.User._id;
            if (UserId) {
                await userModel.findOneAndUpdate(
                    { _id: UserId }, { Status: "Online" }
                );
            }
            res.cookie("refreshtoken", response.refreshToken, { httpOnly: true });
            res.json(response);
        }

    });

    const logOut = asyncHandler(async (req: Request, res: Response) => {
        const UserId: string = req.body.response.userId as string;
        const user = await userModel.findOneAndUpdate({ _id: UserId }, { $set: { Status: "Offline" } });
        res.json(user);
    });

    const GoogleSignUp = asyncHandler(async (req: Request, res: Response) => {

        const user = req.body.data.user;
        // const uid = user.uid;
        const userexist = await userModel.findOne({ uid: user.uid });

        if (!userexist) {
            console.log("this function is ok");

            const userData: UserInterFace = {
                uid: user.uid,
                Fname: user.displayName,
                Email: user.email,
                image: user.photoURL,
                Status: "",
                Phone: 0,
                CurrentPosition: "",
                Password: "",
                ConfirmPassword: "",
                blockStatus: false
            };
            console.log(userData);
            

            await addUser(userData, UserdbRepo, UserAuthServices);
            const userexist = await userModel.findOne({ uid: user.uid });
            const UserId = userexist?._id;
            if (UserId) {
                await userModel.findOneAndUpdate(
                    { _id: UserId }, { Status: "Online" }
                );
            }

            if (user.email === userexist?.Email) {
                const response = { email: userexist?.Email, uid: userexist?.uid, userId: UserId };
                res.json(response);
            } else {
                const response = await googleLogin(userexist, UserdbRepo);
                res.json(response);
            }


        } else {
            const userexist = await userModel.findOne({ uid: user.uid });
            const UserId = userexist?._id;
            if (UserId) {
                await userModel.findOneAndUpdate(
                    { _id: UserId }, { Status: "Online" }
                );
            }

            if (user.email === userexist?.Email) {
                const response = { email: userexist?.Email, uid: userexist?.uid, userId: UserId };
                res.json(response);
            } else {
                const response = await googleLogin(userexist, UserdbRepo);
                res.json(response);
            }

        }





    });

    const SerchDataData = asyncHandler(async (req: Request, res: Response) => {
        try {
            const SearchString = req.body.formData;
            const courseSearchData = await courseModel.find({ courseName: { $regex: SearchString, $options: "i" } });
            console.log(courseSearchData);
            res.json(courseSearchData);
        } catch (error) {
            console.log(error);
        }
    });

    const getUserDetails = asyncHandler(async (req: Request, res: Response) => {
        try {
            const userId = req.query.userId;
            const user = await userModel.findOne({ _id: userId });
            res.json(user);
        } catch (error) {
            console.log(error);
        }

    });

    const getUserDetailsEdit = asyncHandler(async (req: Request, res: Response) => {

        const data = req.body;
        const userId = data.userId;
        console.log(data);

        await userModel.findOneAndUpdate({ _id: userId }, { $set: { Fname: data.Fname, Lname: data.Lname, Email: data.Email, Phone: data.Phone } });
        res.json({ message: "this user is updated" });



    });




    return {
        DoSignup,
        DoLogin,
        GoogleSignUp,
        logOut,
        SerchDataData,
        getUserDetails,
        getUserDetailsEdit
    };
};

export default UserController;
