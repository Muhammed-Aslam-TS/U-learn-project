import userModel from "../Models/UserModel";
import { UserInterFace } from "../../../../Types/UserInterFace";

export function UserDatabase() {
    const DoSignUP = async (userData: UserInterFace) => {        
        const User = await userModel.create(userData)
        return User
    }

    const findByEmail = async (Email: string) => {
        const User: UserInterFace | null = await userModel.findOne({'Email':Email})
        return User
    }


    return {
        DoSignUP,
        findByEmail
    }
}

export type TypeOfUserDb = typeof UserDatabase