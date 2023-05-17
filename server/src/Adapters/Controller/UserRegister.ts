/* eslint-disable no-console */
import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { UserInterFace } from "../../Types/UserInterFace";
import { TypeOfUserDb } from "../../FrameWorks/Database/MongoDb/Repositories/UserDb";
import { typeOfUserRepo } from "../../applications/Repositories/UserReppo";
import { addUser, userLogin } from "../../applications/UseCases/Auth/UserRegister";
import { typeOfUserAuthService } from "../../FrameWorks/Service/UserAuthService";
import { typeOfUserAuthServiceInterFace } from "../../applications/Services/UserAuthserviceInterFacw";





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

  

    return {
        DoSignup,
        DoLogin,
    };
};


export default UserController;
