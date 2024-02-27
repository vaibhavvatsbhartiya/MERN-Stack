import mongoose from "mongoose";
import bcrypt from '../node_modules/bcrypt/bcrypt.js';

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



// Secure password with bcrypt
userSchema.pre("save", async function (next){
    // console.log("preMethod", this);
    const user = this;
    if (!user.isModified("userPassword")){
        next();
    }
    try{
        const saltRound = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(this.userPassword, saltRound);
        this.userPassword = hashPassword;
    }
    catch(err){
        next(err);
    }
} )



// now define model or the collection name

 const User = new mongoose.model("User", userSchema);

 export default User;

