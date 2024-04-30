const express = require("express")
const { createDestination, getAllDestination, getSingleDestination, updateDestination, deleteDestination } = require("../controller/destinationController")


const router = express.Router()

router.post("/create-destination",createDestination)
router.get("/all-destination",getAllDestination)
router.get("/single-destination/:id",getSingleDestination)
router.put("/update-destination",updateDestination)
router.delete("/delete-destination",deleteDestination)


module.exports = router