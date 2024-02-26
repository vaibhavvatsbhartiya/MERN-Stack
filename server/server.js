import  Express  from "express"; 
import router from "./router/auth-router.js";
//  make sure to define complete file name with its format i.e here we are using .js

const app = Express();


app.use("/api/auth", router);

app.get('/', (req, res)=>{
    res.status(200).send('welcome');
})

const Port = 5000;
app.listen(Port, ()=>{
    console.log(`server is running at ${Port} `);
}); 