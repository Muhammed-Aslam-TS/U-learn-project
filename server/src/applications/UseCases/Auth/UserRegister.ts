/* eslint-disable no-console */
import { UserInterFace } from "../../../Types/UserInterFace";
import { HttpStatus } from "../../../Types/httpStatus";
import AppError from "../../../Utils/AppError";
import { typeOfUserRepo } from "../../Repositories/UserReppo";
import { typeOfUserAuthServiceInterFace } from "../../Services/UserAuthserviceInterFacw";



export const addUser = async (
    UserData: UserInterFace,
    UserDb: ReturnType<typeOfUserRepo>,
    UserAuthService: ReturnType<typeOfUserAuthServiceInterFace>
) => {  

    UserData.Email = UserData.Email?.toLowerCase();
    UserData.Password = await UserAuthService.EncriptPassword(UserData.Password);

    UserData.ConfirmPassword = await UserAuthService.EncriptPassword(UserData.ConfirmPassword);
    const User = await UserDb.DoSignUP(UserData);
    return {
        User
    };
};

export const userLogin = async (
    Email: string,
    Password: string,
    UserDb: ReturnType<typeOfUserRepo>,
    UserAuthService: ReturnType<typeOfUserAuthServiceInterFace>
) => {
    const User: UserInterFace | null = await UserDb.findByEmail(Email);
    if (!User) {
        throw new AppError("this user does't exist", HttpStatus.UNAUTHORIZED);
    } else {
        const Authenticat = await UserAuthService.CompairePassword(Password, User.Password);
        if (!Authenticat) {
            throw new AppError("Sory,  Password entered incorrectly", HttpStatus.UNAUTHORIZED);
        }
        const token = await UserAuthService.GenerateAccessToken(User._id as string);
        const refreshToken = await UserAuthService.generateRefreshToken(User._id as string);
        return { User, token, refreshToken };
    }
};



