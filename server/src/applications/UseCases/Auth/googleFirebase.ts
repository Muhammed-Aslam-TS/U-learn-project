
import { GoogleUserInterface, UserInterFace } from "../../../Types/UserInterFace";
import { typeOfUserRepo } from "../../Repositories/UserReppo";
import { typeOfUserAuthServiceInterFace } from "../../Services/UserAuthserviceInterFacw";




export const googleLogin = async (
    userData: any,
    UserDb: ReturnType<typeOfUserRepo>,
) => {  
    const User = await UserDb.GoogleSignUP(userData);
 

    return {
        User
    };

};

export const googleData = async (
    UserDb: ReturnType<typeOfUserRepo>,
    userData: GoogleUserInterface) => {
    const googleData = await UserDb.findUid(userData);


    return {
        googleData
    };
};