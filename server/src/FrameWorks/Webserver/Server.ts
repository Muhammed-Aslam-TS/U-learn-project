import { Application } from "express";



const Server= (app:any)=>{
    app.listen(3000,()=>{
        // eslint-disable-next-line no-console
        console.log("server start on port 3000");  
    });
};













export default Server;

