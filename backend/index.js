const express = require("express");
const app = express();
const portNumber = 5050;
const cors = require("cors");
const authRoute = require("./routes/auth.route");
const mongoose = require('mongoose');
const MONGO_DB_URL = require("./config/db.config");

mongoose.set('strictQuery', false);
mongoose.connect(MONGO_DB_URL)
  .then(data => {
    console.log("Mongo DB is connected")
  })
  .catch(error => {
    console.log("Error while connecting to Mongo DB")
  })

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(portNumber, (error) => {
  if (error) {
    console.log("---ERROR ON SERVER START---");
    console.log(error);
  } else {
    console.log(`Server is running on port: ${portNumber}`);
  }
});
