import { Application } from "express";
import Signup from "./UserRouter/UserRouter";

const Router = (app:Application)=>{
    // app.use('/',(req:Request,res:Response)=>{
    //     console.log('helloWorld');
    //    res.end('helloWorld');
        
    // })
    app.use("/",Signup);
    // app.use('/',login)
};

export default Router;