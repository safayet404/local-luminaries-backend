const express = require("express")
const { createActivity, getAllActivity, getSingleActivity, updateActivity, deleteActivity } = require("../controller/activityController")

const router = express.Router()

router.post("/create-activity",createActivity)
router.get("/all-activity",getAllActivity)
router.get("/single-activity/:id",getSingleActivity)
router.put("/update-activity/:id",updateActivity)
router.delete("/delete-activity/:id",deleteActivity)
module.exports = router