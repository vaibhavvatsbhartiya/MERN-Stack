import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        // require: true,
    },
    userEmail:{
        type: String,
        require: true,
    },
    userPassword:{
        type: String,
        // require: true,
    },
    userPhone:{
        type: String,
        // require: true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
});

// now define model or the collection name

 const User = new mongoose.model("User", userSchema);

 export default User;

