const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    count: { type: Number, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
