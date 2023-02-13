const express = require("express");
const app = express();
const portNumber = 5050;
const cors = require("cors");

app.use(cors());

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

app.listen(portNumber, (error) => {
  if (error) {
    console.log("---ERROR ON SERVER START---");
    console.log(error);
  } else {
    console.log(`Server is running on port: ${portNumber}`);
  }
});
