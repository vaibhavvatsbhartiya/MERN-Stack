import User  from "../models/user-model.js";



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
    const user =  await User.create({userEmail:email});
    

    res
      .status(200)
      .json({user});
      // .send("welcome, aap ka data gaya" , user);
  } catch (err) {
    console.log(err);
  }
};

