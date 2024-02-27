import User  from "../models/user-model.js";
// import bcrypt from '../node_modules/bcrypt/bcrypt.js';


export const home = async (req, res) => {
  try {
    res
      .status(200)
      .send("welcome, we are using routers now and this is home page");
  } catch (err) {
    console.log(err);
  }
};



// Registration logic

// 1. Get Registration Data
// 2. Check Email Existance
// 3. Hash Password
// 4. Create user
// 5. Save to DB
// 6. Respond : successful or user exist

export const register = async (req, res) => {
  try {

    const {name, email, password, phone} = req.body;

    const userExist = await User.findOne({userEmail:email});

    if (userExist){
      return res.status(400).json({msg:"user already exist"})
    }

    // hash password
    // const addSalt = 10;
    // const hashPassword = await bcrypt.hash(password, addSalt);

    const user =  await User.create({userName:name, userEmail:email, userPassword:password, userPhone:phone});
    

    res
      .status(201)
      .json({msg : userCreated});
      // .send("welcome, aap ka data gaya" , user);
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal Server Error");
  }
};

