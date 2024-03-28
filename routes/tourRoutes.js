const express = require("express")
const { createTour, getAllTour, getSingleTour, updateTour, deleteTour } = require("../controller/tourController")

const router = express.Router()

router.post("/create-tour",createTour)
router.get("/all-tour",getAllTour)
router.get("/single-tour/:id",getSingleTour)
router.put("/update-tour/:id",updateTour)
router.delete("/delete-tour/:id",deleteTour)


module.exports = router