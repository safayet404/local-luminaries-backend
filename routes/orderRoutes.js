const express = require("express")
const { createOrder, getAllOrder, getSingleOrder, updateOrder, deleteOrder, orderByUser } = require("../controller/orderController")

const router = express.Router()

router.post("/create-order",createOrder)
router.get("/all-order",getAllOrder)
router.get("/single-order/:id",getSingleOrder)
router.get("/user-order/:userId",orderByUser)
router.put("/update-order/:id",updateOrder)
router.delete("/delete-order/:id",deleteOrder)

router.delete("/delete-order/:id",deleteOrder


module.exports = router