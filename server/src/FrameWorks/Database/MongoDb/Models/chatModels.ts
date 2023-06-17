import { Schema, model } from "mongoose";

const chatSchema = new Schema({
  sender: String,
  receiver: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});


const ChatModels = model("Chat", chatSchema);


export default ChatModels;
