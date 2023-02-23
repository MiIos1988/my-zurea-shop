const express = require("express");
<<<<<<< HEAD
const ProductModel = require("../models/product.model");
const productRoute = express.Router();


productRoute.get("/get-all", (req, res)=>{
    ProductModel.find({})
    .then(data => res.send(data))
    .catch(err => res.status(420).send("Error in DB"))
})  

module.exports = productRoute;
=======
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
>>>>>>> 303df917a8c146733fe8328157bb0c3c40819ee7
