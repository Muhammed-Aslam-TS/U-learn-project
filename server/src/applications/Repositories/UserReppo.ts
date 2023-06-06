import { TypeOfUserDb } from "../../FrameWorks/Database/MongoDb/Repositories/UserDb";
import { UserInterFace } from "../../Types/UserInterFace";
import { GoogleUserInterface } from "../../Types/UserInterFace";



const UserReppo = (Repository: ReturnType<TypeOfUserDb>) => {

    const DoSignUP = (userData: UserInterFace) => { return Repository.DoSignUP(userData); };

    const findByEmail = (Email: string) => { return Repository.findByEmail(Email); };

    const GoogleSignUP = (userData: GoogleUserInterface) => { return Repository.googleSignUp(userData); };

    const findUid = (userData:GoogleUserInterface)=>{ return Repository.findGoogleData(userData);};




    return {
        DoSignUP,
        findByEmail,
        GoogleSignUP,
        findUid
    };
};

export default UserReppo;

export type typeOfUserRepo = typeof UserReppo