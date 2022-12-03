const OrderService = require("../services/order.service");

const OrderController = {
  async getOrder(req, res) {
    try {
      const product = await OrderService.getOrder(id);
      return res.json({ data: product });
    } catch (ex) {
      console.error(ex.message);
      console.log(ex.stack);
      res.status(400).send(ex.message);
    }
  },

  async getAllOrders(req, res) {
    try {
      const products = await OrderService.getAllOrders();
      return res.json({ data: products });
    } catch (ex) {
      console.error(ex.message);
      console.log(ex.stack);
      res.status(400).send(ex.message);
    }
  },

  async addOrder(req, res) {
    try {
      const product = await OrderService.addOrder(req.body);
      return res.json({ data: product });
    } catch (ex) {
      console.error(ex.message);
      console.log(ex.stack);
      return res.status(400).send(ex.message);
    }
  },
};

module.exports = OrderController;
