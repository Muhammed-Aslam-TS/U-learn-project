import { Application } from "express";
import UserRouter from "./UserRouter/UserRouter";
import AddCourseRouter from "./UserRouter/AddCourseRouter";


const Router = (app:Application)=>{
    // app.use('/',(req:Request,res:Response)=>{
    //     console.log('helloWorld');
    //    res.end('helloWorld');
        
    // })
    app.use("/",UserRouter);
    app.use("/",AddCourseRouter);
};

export default Router;