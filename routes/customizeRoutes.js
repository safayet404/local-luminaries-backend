const express = require("express")
const { createCustomizeTour, getAllCustomizeTour, getSingleCustomizeTour, updateCustomizeTour, deleteCustomizeTour } = require("../controller/customizeController")

const router = express.Router()

router.post("/create-customize-tour",createCustomizeTour)
router.get("/all-customize-tour",getAllCustomizeTour)
router.get("/single-customize-tour/:id",getSingleCustomizeTour)
router.put("/update-customize-tour/:id",updateCustomizeTour)
router.delete("/delete-customize-tour/:id",deleteCustomizeTour)



module.exports = router