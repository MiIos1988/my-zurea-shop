const express = require("express");
const ProductsModel = require("../models/product.model");
const productRoute = express.Router();

productRoute.get("/get-all", (req, res) => {
  // console.log(req.params)
  const { search } = req.query
  console.log(search)
  ProductsModel.find(search ? { title: { $regex: search, $options: 'i' } } : {})
    // ProductsModel.find(search ? { title: search } : {})
    .then((result) => {
      // console.log(result);
      res.send(result);
    })
    .catch((err) => {
      res.status(420).send("Error in DB");
    });
});

module.exports = productRoute;  
