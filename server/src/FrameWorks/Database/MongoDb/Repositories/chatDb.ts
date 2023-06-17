import { MessageRepository } from "./../../../../applications/Repositories/MessageRepository";
import { Message } from "../../../../Types/SocketInterface";
import { MessageEntity } from "../../../Entity/MessageEntity";

export class MessageRepositoryImpl implements MessageRepository {
  async saveMessage(message: Message): Promise<void> {
    // Save the message to the database (MongoDB or any other database)


    // eslint-disable-next-line no-console
    console.log(message,"mmmmmmmmmmmmmmmmmmmmmmmmmmm");
    
    const messageEntity = new MessageEntity(message);
    await messageEntity.save();
  }

  async getChatHistory(senderId: string, receiverId: string): Promise<Message[]> {
    // Retrieve chat history from the database
    const messages = await MessageEntity.find({
      $or: [
        { sender: senderId, receiver: receiverId },
        { sender: receiverId, receiver: senderId },
      ],
    }).exec();
    return messages.map((message:any) => message.toDomain());
  }
}
