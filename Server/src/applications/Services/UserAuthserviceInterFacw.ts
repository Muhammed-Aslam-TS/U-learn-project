import { typeOfUserAuthService } from '../../FrameWorks/Service/UserAuthService';


export const UserAuthServiceInterFace = (Service:ReturnType<typeOfUserAuthService>)=>{
    
    const EncriptPassword = (Password:string)=>{
        console.log(Password);
        
        return Service.EncriptPassword(Password)
    }

    const CompairePassword = (Password:string,userPassword:string)=>{
        console.log(Password);
        
        return Service.CompairePassword(Password,userPassword)
    }

    const GenerateAccessToken = (UserId:string)=>{
        return Service.GenerateAccessToken(UserId)
    }

    const generateRefreshToken = (UserId:string)=>{
        return Service.generateRefreshToken(UserId)
    }

    return{
        EncriptPassword,
        CompairePassword,
        GenerateAccessToken,
        generateRefreshToken
    }
}

export type typeOfUserAuthServiceInterFace = typeof UserAuthServiceInterFace;