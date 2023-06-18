import { Schema, model } from "mongoose";

const AdminScheama = new Schema({
    FullName: String,
    Email: String,
    Phone: Number,
    Password:String
});


const AdminModels = model("Admin", AdminScheama);


export default AdminModels;
