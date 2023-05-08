import mongoose from 'mongoose'
import dbOptions from '../../../../Types/ConnectionInterFace';


const dbOpt: dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const connectDb = async () => {
    try {
      // mongodb connection string
      mongoose.set("strictQuery", false);
      const connect = await mongoose.connect('mongodb://127.0.0.1:27017/U-learn_Project',dbOpt);
  
      console.log(`MongoDB connected`);
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  };
  export default connectDb