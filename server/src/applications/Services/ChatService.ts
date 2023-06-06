import { typeOfChatService } from "../../FrameWorks/Service/ChatService";



export const ChatServiceInterface = (Service: ReturnType<typeOfChatService>) => {
    
    const SaveChat = (data:string) => {
        return Service.StoreChat(data);
    };

    return {
        SaveChat
    };
};


export type typeOfChatServiceInterface = typeof ChatServiceInterface;