/* eslint-disable no-console */
import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { UserInterFace } from "../../Types/UserInterFace";
import { TypeOfUserDb } from "../../FrameWorks/Database/MongoDb/Repositories/UserDb";
import { typeOfUserRepo } from "../../applications/Repositories/UserReppo";
import { addUser, userLogin } from "../../applications/UseCases/Auth/UserRegister";
import { typeOfUserAuthService } from "../../FrameWorks/Service/UserAuthService";
import { typeOfUserAuthServiceInterFace } from "../../applications/Services/UserAuthserviceInterFacw";
import { googleData, googleLogin } from "../../applications/UseCases/Auth/googleFirebase";




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
        res.cookie("refreshtoken", response.refreshToken, { httpOnly: true });
        res.json(response);

    });


    const GoogleSignUp = asyncHandler(async (req: Request, res: Response) => {

        const user = req.body.data.user;
        const userData = {
            uid: user.uid,
            userName: user.displayName,
            email: user.email,
            image: user.photoURL
        };

        const GoogleUser = await googleData(UserdbRepo, userData);

        if (userData.email === GoogleUser.googleData?.email) {
            const response = { email: GoogleUser.googleData?.email, uid: GoogleUser.googleData?.uid };
            res.json(response);
        } else {
            const response = await googleLogin(userData, UserdbRepo);
            res.json(response);
        }



    });






    return {
        DoSignup,
        DoLogin,
        GoogleSignUp
    };
};


export default UserController;
