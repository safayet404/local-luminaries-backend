const express = require("express")
const { createVideo, getAllVideo, getSingleVideo, updateVideo, deleteVideo } = require("../controller/videoController")

const router = express.Router()

router.post("/create-video",createVideo)
router.get("/all-video",getAllVideo)
router.get("/single-video/:id",getSingleVideo)
router.put("/update-video/:id",updateVideo)
router.delete("/delete-video/:id",deleteVideo)


module.exports = router