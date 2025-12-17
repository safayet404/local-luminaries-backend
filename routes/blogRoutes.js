const express = require("express")
const { createBlog, getAllBlog, getSingleBlog, deleteBlog, updateBlog } = require("../controller/blogController")

const router = express.Router()

router.post("/create-blog",createBlog)
router.get("/all-blog",getAllBlog)
router.get("/single-blog/:id",getSingleBlog)
router.put("/update-blog/:id",updateBlog)
router.delete("/delete-blog/:id",deleteBlog)
router.delete("/delete-blog-desc/:id",deleteBlog)
router.delete("/delete-blog",deleteBlog)

module.exports = router