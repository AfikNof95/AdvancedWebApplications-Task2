const OrderModel = require("../models/order.model");

const OrderService = {
  async addOrder(order) {
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
