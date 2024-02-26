import  Express  from "express"; 
// import  Router  from "express";

const router = Express.Router();

router.get("/", (req, res)=>{
    res.status(200).send("welcome, we are using routers now");
});

// alternative method to use router

router.route("/a").get((req, res)=>{
    res.status(200).send("welcome V2, we are using routers now");
});


export default router;