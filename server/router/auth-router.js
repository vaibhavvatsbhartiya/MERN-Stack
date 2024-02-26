import  Express  from "express"; 
// import  Router  from "express";
import home from "../controllers/auth-controller.js";

const router = Express.Router();


// first method

// router.get("/", (req, res)=>{
//     res.status(200).send("welcome, we are using routers now");
// });

// alternative method to use router

router.route("/").get( home );


export default router;