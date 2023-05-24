import express, { Application } from "express";
import Server from "./FrameWorks/Webserver/Server";
import Router from "./FrameWorks/Webserver/Routes";
import connectDb from "./FrameWorks/Database/MongoDb/Connection/Connection";
import ExpressConfig from "./FrameWorks/Webserver/Express";




const app:Application = express();
connectDb();
Server(app);
ExpressConfig(app);
Router(app);




export default app;