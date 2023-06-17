import { Message } from "../../Types/SocketInterface";


export interface MessageRepository {
    saveMessage(message: Message): Promise<void>;
    getChatHistory(senderId: string, receiverId: string): Promise<Message[]>;
  }
  