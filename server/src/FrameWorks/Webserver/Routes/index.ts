import { Application } from "express";
import UserRouter from "./UserRouter/UserRouter";
import AddCourseRouter from "./UserRouter/AddCourseRouter";
import AdminRouter from "./AdminRouter/AdminRouter";
import GetAllUsers from "./AdminRouter/GetAllUsers";
import allCourses from "./AdminRouter/GetallCourses";
import chtatRouter from "./UserRouter/chatRouter";



const Router = (app:Application)=>{
    // app.use('/',(req:Request,res:Response)=>{
    //     console.log('helloWorld');
    //    res.end('helloWorld');
        
    // })
    app.use("/",UserRouter);
    app.use("/",AddCourseRouter);
    app.use("/",chtatRouter);
    app.use("/admin",AdminRouter);
    app.use("/admin",GetAllUsers);
    app.use("/admin",allCourses);
};

export default Router;