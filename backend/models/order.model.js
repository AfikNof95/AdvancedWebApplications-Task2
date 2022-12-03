const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderModel = new Schema({
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
      count: { type: Number, default: 0 },
    },
  ],
});

module.exports = mongoose.model("Order", OrderModel);
