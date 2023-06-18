import userModel from "../Models/UserModel";
import GoogleUserModel from "../Models/googleAuthModel";
import { GoogleUserInterface, UserInterFace } from "../../../../Types/UserInterFace";

export function UserDatabase() {

    const DoSignUP = async (userData: UserInterFace) => {
       
        userData.Status = "Offline";
        userData.walletAmount = 0;
        userData.blockStatus = false;
        const User = await userModel.create(userData);
        return User;
    };

    const findByEmail = async (Email: string) => {
        const User: UserInterFace | null = await userModel.findOne({ "Email": Email });
        return User;
    };

    const googleSignUp = async (userData: GoogleUserInterface) => {
        userData.Status = "Offline";
        const User = await GoogleUserModel.create(userData);
        return User;
    };

    const findGoogleData = async (userData: GoogleUserInterface) => {
        const Email = userData.email;
        const googleData = await GoogleUserModel.findOne({ "email":Email });
        return googleData;
    };


    return {
        DoSignUP,
        findByEmail,
        googleSignUp,
        findGoogleData
    };
}

export type TypeOfUserDb = typeof UserDatabase