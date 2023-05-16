import mongoose from "mongoose";
import dbOptions from "../../../../Types/ConnectionInterFace";


const dbOpt: dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connectDb = async () => {
    try {
      // mongodb connection string
      mongoose.set("strictQuery", false);
       await mongoose.connect("mongodb://127.0.0.1:27017/U-learn_Project",dbOpt);
      // eslint-disable-next-line no-console
      console.log("MongoDB connected");
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      process.exit(1);
    }
  };
  export default connectDb;