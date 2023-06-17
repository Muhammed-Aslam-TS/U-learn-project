import { MessageRepository } from "../../Repositories/MessageRepository";
import { Message } from "../../../Types/SocketInterface";


export class GetChatHistoryUseCase {
    constructor(private messageRepository: MessageRepository) {}
  
    async execute(senderId: string, receiverId: string): Promise<Message[]> {
      return this.messageRepository.getChatHistory(senderId, receiverId);
    }
  }
  