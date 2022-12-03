const router = require("express").Router();

const OrderController = require("../controllers/order.controller");

router.get("/Get/:id", OrderController.getOrder);
router.get("/GetAll", OrderController.getAllOrders);
router.post("/Add", OrderController.addOrder);

module.exports = router;
