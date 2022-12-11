const OrderModel = require("../models/order.model");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const OrderService = {
  async addOrder(order) {
    for (let product of order.products) {
      product.product = ObjectId(product.product);
    }
    const newOrder = await OrderModel.create(order);
    return newOrder;
  },
  async getAllOrders() {
    return await OrderModel.find().populate(["products.product"]).exec();
  },
  async getOrder(id) {
    return await OrderModel.findById(id);
  },
};

module.exports = OrderService;
