


import { TypeOfGetAllUserDb } from "../../FrameWorks/Database/MongoDb/Repositories/GertAllUsers";




const AllUsersReppo = (Repository: ReturnType<TypeOfGetAllUserDb>) => {

    const GetAllUsers = () => {
        // eslint-disable-next-line no-console
        console.log("reppoil vannu_____________________");
        
        return Repository.getAllUsers();
    };

    // const findByEmail = (Email: string) => { return Repository.findByEmail(Email) }


    return {
        GetAllUsers
        // findByEmail
    };
};

export default AllUsersReppo;

export type typeOfAllUserRepo = typeof AllUsersReppo