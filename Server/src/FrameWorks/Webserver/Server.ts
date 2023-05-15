import { Application } from "express";

const Server= (app:Application)=>{
    app.listen(4000,()=>{
        console.log(`server start on port 4000`);  
    })
}

export default Server