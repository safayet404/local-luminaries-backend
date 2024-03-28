const express = require("express")
const { createActivity, getAllActivity, getSingleActivity, updateActivity, deleteActivity } = require("../controller/popularActivityController")

const router = express.Router()

router.post("/create-popular",createActivity)
router.get("/all-popular",getAllActivity)
router.get("/single-popular/:id",getSingleActivity)
router.put("/update-popular/:id",updateActivity)
router.delete("/delete-popular/:id",deleteActivity)

module.exports = router