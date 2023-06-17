import { Schema, model, Document, Types } from "mongoose";
import { Message } from "../../Types/SocketInterface";



interface MessageDocument extends Message, Document {}

const messageSchema = new Schema<MessageDocument>(
  {
    sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
    receiver: { type: Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, required: true },
  },
  { timestamps: true }
);

export const MessageEntity = model<MessageDocument>("Message", messageSchema);
