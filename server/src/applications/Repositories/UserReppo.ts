import { TypeOfUserDb } from '../../FrameWorks/Database/MongoDb/Repositories/UserDb';
import { UserInterFace } from '../../Types/UserInterFace';


const UserReppo = (Repository: ReturnType<TypeOfUserDb>) => {

    const DoSignUP = (userData: UserInterFace) => {
        return Repository.DoSignUP(userData)
    }

    const findByEmail = (Email: string) => { return Repository.findByEmail(Email) }


    return {
        DoSignUP,
        findByEmail
    }
}

export default UserReppo

export type typeOfUserRepo = typeof UserReppo