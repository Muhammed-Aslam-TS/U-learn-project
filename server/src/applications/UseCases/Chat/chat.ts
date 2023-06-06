
import { ChatInterface } from "../../../Types/chatInterFace";
import { typeOfChatRepo } from "../../Repositories/ChatReppo";


export const createChat = async(datas:ChatInterface,dbRepositoryGroupMessages:ReturnType<typeOfChatRepo>) =>

await dbRepositoryGroupMessages.createChat(datas);
