
import { ChatInterface } from "../../../../Types/chatInterFace";
import ChatModels from "../Models/chatModels";

export function ChatDatabase() {

    const createChat = async (datas: ChatInterface) => {
        // eslint-disable-next-line no-console
        console.log(datas, "vannu_____________________datas");

        const createChat = await ChatModels.create(datas);
        return createChat;
    };




    return {
        createChat
    };
}
export type TypeOfChatDb = typeof ChatDatabase