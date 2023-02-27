const express = require("express");
const ProductsModel = require("../models/product.model");
const productRoute = express.Router();

productRoute.get("/get-all/:page/:elPerPage", (req, res) => {
  const { elPerPage, page } = req.params
  // const { search } = req.query
  // console.log(search)
  ProductsModel.find()
    .limit(elPerPage)
    .skip(page * elPerPage)
    // ProductsModel.find(search ? { title: search } : {})
    .then((result) => {
      ProductsModel.count().exec((error, count) => {
        if (error) {
          return req.status(420).send("Error on count.")
        }
        return res.send({
          elements: result,
          totalItems: count,
          page: Number(page),
          elPerPage: Number(elPerPage)
        })
      }
      )
    })
    .catch((err) => {
      res.status(420).send("Error in DB");
    });
});

module.exports = productRoute;  
