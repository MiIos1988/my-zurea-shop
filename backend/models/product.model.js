<<<<<<< HEAD
const Mongoose = require('mongoose');

const productSchema = new Mongoose.Schema({
    imgUrl: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String
    },
    price: {
        type: Number
    }
})

const ProductModel = Mongoose.model("products", productSchema);

module.exports = ProductModel;
=======
const Mongoose = require("mongoose");

const productSchema = new Mongoose.Schema({
  imgUrl: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const ProductsModel = Mongoose.model("products", productSchema);

module.exports = ProductsModel;
>>>>>>> 303df917a8c146733fe8328157bb0c3c40819ee7
