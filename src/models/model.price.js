const mongoose = require("mongoose");

const priceSchema = mongoose.Schema(
  {
    TotalMRP: { type: Number, required: true },
    Subtotal: { type: Number, required: false },
    OrderTotal: { type: Number, required: false },
    count: { type: Number, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Price = mongoose.model("price", priceSchema);

module.exports = Price;
