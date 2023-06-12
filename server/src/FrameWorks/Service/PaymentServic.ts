



export const PaymentService = () => {
    const addCourse = (data: object) => {
        
        return data;
    };

    return {
        addCourse
    };

};

export type typeOfPaymentService = typeof PaymentService;




// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import dotenvConfig from "../../dotenvConfig";



// export const UserAuthService = ()=>{
    
//     const EncriptPassword = async (Password:string)=>{
//        const password = await bcrypt.hash(Password,10);
//         return password;

//     };

//     const CompairePassword = async (Password:string,EncriptPassword:string) =>{        
//         const Status = await bcrypt.compare(Password,EncriptPassword)    ;    
//         return Status;
//     };

//     const GenerateAccessToken = async (payload:string)=>{
//         const token = await jwt.sign({payload},dotenvConfig.access_token_key,{expiresIn:"30s"});
//         return token;
//     };

//     const generateRefreshToken = async(payload : string )=>{
//         const token = await jwt.sign({payload}, dotenvConfig.refresh_token_key , {expiresIn:"1h"});
//         return token;
//     };

//     const verifyRefreshToken = async (token:string)=>{
        
//         const response = await jwt.verify(token,dotenvConfig.refresh_token_key);
//         return response;
//     };

//     const verifyAccessToken =async (token : string) => {
//         return jwt.verify(token,dotenvConfig.access_token_key) ;
//      };

//     return{
//         EncriptPassword,
//         CompairePassword,
//         GenerateAccessToken,
//         generateRefreshToken,
//         verifyRefreshToken,
//         verifyAccessToken
//     };
// };

// export type typeOfPaymentService = typeof UserAuthService;