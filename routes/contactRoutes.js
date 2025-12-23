const express = require("express")
const { createContact, getAllContact, getSingleContact, updateContact, deleteContact } = require("../controller/contactController")

const router = express.Router()

router.post("/create-contact",createContact)
router.get("/all-contact",getAllContact)
router.get("/single-contact/:id",getSingleContact)
router.put("/update-contact/:id",updateContact)
router.delete("/delete-contact/:id",deleteContact)

router.delete("/delete-contact)

module.exports = router