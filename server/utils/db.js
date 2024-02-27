import mongoose from "mongoose";

const URL = "mongodb+srv://vabhavvats30:705AENCURKQdncJ3@cluster0.ihuem44.mongodb.net/learn_MERN_Stack?retryWrites=true&w=majority&appName=Cluster0";

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
