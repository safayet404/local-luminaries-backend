const express = require("express")
const { createTeam, getAllTeam, getSingleTeam, updateTeam, deleteTeam } = require("../controller/teamController")

const router = express.Router()

router.post("/create-team",createTeam)
router.get("/all-team",getAllTeam)
router.get("/single-team/:id",getSingleTeam)
router.put("/update-team/:id",updateTeam)
router.delete("/delete-team/:id",deleteTeam)

module.exports = router