const express = require("express");
const ProductsModel = require("../models/product.model");
const productRoute = express.Router();

productRoute.get("/get-all", (req, res) => {
  ProductsModel.find({})
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      res.status(420).send("Error in DB");
    });
});

module.exports = productRoute;
