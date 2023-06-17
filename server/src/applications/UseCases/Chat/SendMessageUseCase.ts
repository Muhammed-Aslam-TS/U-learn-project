import { Message } from "../../../Types/SocketInterface";
import { MessageRepository } from "../../Repositories/MessageRepository";

export class SendMessageUseCase {
    constructor(private messageRepository: MessageRepository) {}
  
    async execute(message: Message): Promise<void> {
      await this.messageRepository.saveMessage(message);
    }
  }
  