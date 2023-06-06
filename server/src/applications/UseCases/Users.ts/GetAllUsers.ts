
import { typeOfAllUserRepo } from "../../Repositories/GetAllUsersReppo";



export const googleLogin = async (
    UserDb: ReturnType<typeOfAllUserRepo>,
) => {  
    const AllUser = await UserDb.GetAllUsers();
 

    return {
        AllUser
    };

};

