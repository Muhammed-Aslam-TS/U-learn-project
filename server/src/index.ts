import express, { Application } from "express";
import ServerConfig from "./FrameWorks/Webserver/Server";
import Router from "./FrameWorks/Webserver/Routes";
import connectDb from "./FrameWorks/Database/MongoDb/Connection/Connection";
import ExpressConfig from "./FrameWorks/Webserver/Express";
// import { ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData } from "./Types/SocketInterface";
import socketConfig from "./FrameWorks/WbSocket/socket";
import { Server } from "socket.io";
import { UserAuthService } from "./FrameWorks/Service/UserAuthService";
// import http from "http";
import {createServer} from "http";

const app:Application = express();
const server = createServer(app);


// const io = new Server(server,{
//     cors:{
//         origin:"*",
//         // methods:["GET","POST"]
//     },
//     path: "/socket.io/"
// });



//connecting mongoDb




// socketConfig(io);  
connectDb();
ServerConfig(server);
ExpressConfig(app);
Router(app);




export default app;


