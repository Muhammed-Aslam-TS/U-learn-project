import { Application } from "express";
import UserRouter from "./UserRouter/UserRouter";
import AddCourseRouter from "./UserRouter/AddCourseRouter";
import AdminRouter from "./AdminRouter/AdminRouter";



const Router = (app:Application)=>{
    // app.use('/',(req:Request,res:Response)=>{
    //     console.log('helloWorld');
    //    res.end('helloWorld');
        
    // })
    app.use("/",UserRouter);
    app.use("/",AddCourseRouter);
    app.use("/admin",AdminRouter);
};

export default Router;