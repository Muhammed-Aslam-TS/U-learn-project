/* eslint-disable no-console */

import { Server } from "socket.io";
import { Message } from "../../Types/SocketInterface";

const socketConfig = (io: Server) => {



  io.on("connection", (socket) => {
    console.log("User connected");
  
    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  
    socket.on("chatMessage", (message:Message) => {
      console.log(message,"jjjjjjjjjjjjjjjjjjjjjjjjjjjj");
      
      // Handle the received chat message and send it to the appropriate recipient(s)
      // ...
      socket.broadcast.emit("chatMessage", message);
    });
  });
};

export default socketConfig;