const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    productName: String,
    quantity: Number,
    totalPrice: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
