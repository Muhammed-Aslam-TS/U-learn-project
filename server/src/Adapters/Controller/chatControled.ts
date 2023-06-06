/* eslint-disable no-console */
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { TypeOfChatDb } from "../../FrameWorks/Database/MongoDb/Repositories/chatDb";
import { typeOfChatService } from "../../FrameWorks/Service/ChatService";
import { typeOfChatRepo } from "../../applications/Repositories/ChatReppo";
import { typeOfChatServiceInterface } from "../../applications/Services/ChatService";
import { createChat } from "../../applications/UseCases/Chat/chat";
import userModel from "../../FrameWorks/Database/MongoDb/Models/UserModel";
import courseModel from "../../FrameWorks/Database/MongoDb/Models/CorseModel";
import ChatModels from "../../FrameWorks/Database/MongoDb/Models/chatModels";






const ChatController = (
    ChatDatabase: TypeOfChatDb,
    ChatRepo: typeOfChatRepo,
    Chatservice: typeOfChatService,
    ChatServiceInterface: typeOfChatServiceInterface

) => {


    const chatRepo = ChatRepo(ChatDatabase());
    const chatServices = ChatServiceInterface(Chatservice());

    const addChatDatails = asyncHandler(async (req: Request, res: Response) => {

        const { userId, ownerId, courseId } = req.body;
        const datas = req.body;

        // console.log(datas, "course__________________");

        const user = await ChatModels.findOne({ userId: userId });
        // const owner = await ChatModels.findOne({ ownerId: ownerId });
        console.log(user, "jjjjjjjjjjjjjjjjjjjjjjjjjj");
        // console.log(owner);

        if (!user?._id) {
            const response = await createChat(datas, chatRepo);
        } else {
            console.log("user All redy existed");
        }
    });

    const StoreChat = asyncHandler(async(req: Request, res: Response)=>{
        console.log(req.body);
        
    });

    return {
        addChatDatails,
        StoreChat
    };
};




export default ChatController;


