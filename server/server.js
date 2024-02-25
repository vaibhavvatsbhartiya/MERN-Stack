import  Express  from "express"; 

const app = Express();

app.get('/', (req, res)=>{
    res.status(200).send('welcome');
})

const Port = 5000;
app.listen(Port, ()=>{
    console.log(`server is running at ${Port} `);
}); 