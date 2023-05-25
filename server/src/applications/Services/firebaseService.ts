import { typeOfFireBaseAuthService } from "../../FrameWorks/Service/fireBaseAuthService"




export const fireBaseAuthServiceInterFace =(Service:ReturnType<typeOfFireBaseAuthService>)=> {

    const verifyIdToken = (tokenId:string)=>{
        return Service.verifyIdToken(tokenId);
    }


    return{
        verifyIdToken
    };
}