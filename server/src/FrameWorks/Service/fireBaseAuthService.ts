import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";





export const fireBaseAuthServiceInterFace = () => {
    const verifyIdToken = async (idToken:string)=>{
       console.log();
       
    }






return{
    verifyIdToken
}
}

export type typeOfFireBaseAuthService = typeof fireBaseAuthServiceInterFace;