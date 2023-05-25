import userModel from "../Models/UserModel";
import GoogleUserModel from "../Models/googleAuthModel";
import { GoogleUserInterface, UserInterFace } from "../../../../Types/UserInterFace";

export function UserDatabase() {

    const DoSignUP = async (userData: UserInterFace) => {
        const User = await userModel.create(userData)
        return User
    }

    const findByEmail = async (Email: string) => {
        const User: UserInterFace | null = await userModel.findOne({ 'Email': Email })
        return User
    }

    const googleSignUp = async (userData: GoogleUserInterface) => {
        const User = await GoogleUserModel.create(userData)
        return User
    }

    const findGoogleData = async (userData: GoogleUserInterface) => {
        console.log(userData.email);
        const Email = userData.email

        console.log(Email,'Email_____________________-----');
        
        
        const googleData = await GoogleUserModel.findOne({ 'email':Email })
        return googleData
    }


    return {
        DoSignUP,
        findByEmail,
        googleSignUp,
        findGoogleData
    }
}

export type TypeOfUserDb = typeof UserDatabase