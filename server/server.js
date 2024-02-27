import Express from "express";
import router from "./router/auth-router.js";
//  make sure to define complete file name with its format i.e here we are using
import connectDb from "./utils/db.js";


const app = Express();

app.use(Express.json());

app.use("/api/auth", router);

app.get("/", (req, res) => {
  res.status(200).send("welcome");
});

const Port = 5000;

connectDb().then(() => {
  app.listen(Port, () => {
    console.log(`server is running at port ${Port} `);
  });
});
