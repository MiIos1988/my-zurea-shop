const express = require("express");
const UserModel = require("../models/user.model");
const authRoute = express.Router();

authRoute.post("/login", (req, res) => {
  console.log(req.body);
  if (!req.body.email || !req.body.password) {
    res
      .status(409)
      .send(`Required field: ${!req.body.email ? "email" : "password"}`);
  } else {
    UserModel.findOne(req.body)
      .then((data) => {
        !data
          ? res.status(215).send("Bad credentials.")
          : res.status(201).send(data);
      })
      .catch((error) => {
        console.log(error);
        res.status(415).send(error);
      });
  }
});

module.exports = authRoute;
