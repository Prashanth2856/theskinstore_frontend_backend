const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    count: { type: Number, required: true },
  },
  { versionKey: false }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
