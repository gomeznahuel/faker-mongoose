const { Schema, model } = require("mongoose");

const ProductModel = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  stock: { type: Number, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: Array, required: true },
  status: { type: Boolean, required: true },
});

const productModel = model("products", ProductModel);

module.exports = { productModel };