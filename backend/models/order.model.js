const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderModel = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  country: String,
  city: String,
  street: String,
  houseNumber: Number,
  zip: Number,
  phone: Number,
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
      count: { type: Number, default: 0 },
    },
  ],
});

module.exports = mongoose.model("Order", OrderModel);
