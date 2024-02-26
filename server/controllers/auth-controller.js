const home = async (req, res) => {
  try {
    res.status(200).send("welcome, we are using routers now and this is home page");
  } catch (err) {
    console.log(err);
  }
};

export default home;
