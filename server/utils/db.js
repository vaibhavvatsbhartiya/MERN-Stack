import mongoose from "mongoose";
import * as dotenv from 'dotenv';


dotenv.config();


const URL = process.env.MONGODB_URI ;

const connectDb = async () =>{
    try{
        await mongoose.connect(URL);
        console.log("Database Connection Successful")
    }catch(err){
        console.log(" database connection failed :- ", err);
        process.exit(0);
    }
}

export default connectDb;

// mongodb+srv://vabhavvats30:<password>@cluster0.ihuem44.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
