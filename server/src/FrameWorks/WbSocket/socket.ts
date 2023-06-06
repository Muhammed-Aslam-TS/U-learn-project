/* eslint-disable semi */
/* eslint-disable no-console */
import { Server } from "socket.io";
// import { SocketData } from "../../Types/SocketInterface";
import { messageDatabase } from "../Database/MongoDb/Repositories/groupMessageDb";

const socketConfig = (io: Server) => {

    // const Allmessage = await messageDatabase.addMessage(message)
    io.on("connection", (socket) => {
        console.log("a user connected");

        socket.on("message", async (message: string) => {
            
            console.log(message, "______________gfsdfgsdfg");
            io.emit("message", `${socket.id.substr(0, 2)}: ${message}`);
        });

        socket.on("disconnect", () => {
            console.log("a user disconnected!");
        });
    });
}

export default socketConfig