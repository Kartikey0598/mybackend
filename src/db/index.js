import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDatabase = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
       console.log(`mongodb connected successfully with host: ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("Error in connecting to database", error);
        process.exit(1) //from wherever the error is coming, it will stop the process and exit from there
        
    }
}
export default connectDatabase;