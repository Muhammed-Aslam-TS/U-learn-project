import { Application } from "express";



const Server= (app:any)=>{
    app.listen(4000,()=>{
        // eslint-disable-next-line no-console
        console.log("server start on port 4000");  
    });
};













export default Server;

