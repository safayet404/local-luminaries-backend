const express = require("express")
const { createDestination, getAllDestination, getSingleDestination, updateDestination, deleteDestination } = require("../controller/destinationController")


const router = express.Router()

router.post("/create-destination",createDestination)
router.get("/all-destination",getAllDestination)
router.get("/single-destination/:id",getSingleDestination)
router.put("/update-destination/:id",updateDestination)
router.delete("/delete-destination/:id",deleteDestination)


module.exports = router