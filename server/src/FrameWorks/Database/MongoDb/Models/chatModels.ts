import { Schema, model } from "mongoose";


const ChatModelSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users"
    },
    coursId: {
      type: Schema.Types.ObjectId,
      ref: "Course"
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "users"
    },
  messageId:{
    type: Schema.Types.ObjectId,
      ref: "message"
  }

  }
);

// ChatModelsSchema.pre(/^find/,function(next){
//     // this.populate("user", ["Fname", "Lname"]);
//     next();
// });


const ChatModels = model("ChatModels", ChatModelSchema);


export default ChatModels;
