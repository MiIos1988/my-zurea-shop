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
