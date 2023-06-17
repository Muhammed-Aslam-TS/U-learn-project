// import mongoose, { Schema, model } from "mongoose";

// const messageModelSchema = new Schema({
//     message: {
//         type: String
//     },
//     chatId: {
//         type: Schema.Types.ObjectId,
//         ref: "ChatModels"
//     },
//     senterId: {
//         type: Schema.Types.ObjectId,
//         ref: "users"
//     },
// });

// // messageModelSchema.pre(/^find/,function(next){
// //     this.populate("user",["Fname","Lname"]);
// //     next();
// // });
// const MessageModels = mongoose.model("Message", messageModelSchema);
// export default MessageModels;