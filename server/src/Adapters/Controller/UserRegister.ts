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
        const response = await userLogin(Email, Password, UserdbRepo, UserAuthServices);
        const UserId = response.User._id;
        if (UserId) {
            const user = await userModel.findOneAndUpdate(
                { _id: UserId }, { Status: "Online" }
            );
        }
        res.cookie("refreshtoken", response.refreshToken, { httpOnly: true });
        res.json(response);

    });
    const logOut = asyncHandler(async (req: Request, res: Response) => {
        console.log(req.body, "b___________________");

        const userId = req.body.response.userId;
        console.log(userId,"llllllllllllllllllllllllll");
        
        const user = await userModel.findOneAndUpdate({ _id: userId }, { $set: { Status: "Offline" } });
        console.log(user, "status____________________");

        res.json(user);

    });


    const GoogleSignUp = asyncHandler(async (req: Request, res: Response) => {

        const user = req.body.data.user;
        const userData: GoogleUserInterface = {
            uid: user.uid,
            userName: user.displayName,
            email: user.email,
            image: user.photoURL,
            Status: ""
        };

        const GoogleUser = await googleData(UserdbRepo, userData);
        console.log(GoogleUser, "gggggggggggggggggggggggggg");
        const UserId = GoogleUser.googleData?._id;
        console.log(UserId,"user_id________________gfvyfb");
        
        if (UserId) {
            const user = await GoogleUserModel.findOneAndUpdate(
                { _id: UserId }, { Status: "Online" }
            );
            console.log(user, "......................user");

        }

        if (userData.email === GoogleUser.googleData?.email) {
            const response = { email: GoogleUser.googleData?.email, uid: GoogleUser.googleData?.uid, userId: UserId };
            res.json(response);
        } else {
            const response = await googleLogin(userData, UserdbRepo);
            res.json(response);
        }



    });






    return {
        DoSignup,
        DoLogin,
        GoogleSignUp,
        logOut
    };
};


export default UserController;
