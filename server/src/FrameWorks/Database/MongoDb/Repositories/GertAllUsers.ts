import userModel from "../Models/UserModel";

export function GetAllUserDatabase() {

    const getAllUsers = async () => {
        const AllUser = await userModel.find();
        return AllUser;
    };


    return {
        getAllUsers,

    };
}

export type TypeOfGetAllUserDb = typeof GetAllUserDatabase