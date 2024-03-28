const asyncHandler = require("express-async-handler"); 
const Blog = require("../models/blogModel");

const createBlog = asyncHandler(async(req,res)=>{
    try{
        const addBlog = await Blog.create(req.body)
        res.json(addBlog)
    }catch(error)
    {
        throw new Error(error)
    }
})

const getAllBlog = asyncHandler(async(req,res)=>{
    try{
        const allBlog = await Blog.find()
        res.json(allBlog)
    }catch(error)
    {
        throw new Error(error)
    }
})

const getSingleBlog = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const singleBlog = await Blog.findById(id)
        res.json(singleBlog)
    }catch(error)
    {
        throw new Error(error)
    }
})

const updateBlog = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const blogUpdate = await Blog.findByIdAndUpdate(id,req.body,{new : true})
        res.json(blogUpdate)
    }catch(error)
    {
        throw new Error(error)
    }
})

const deleteBlog = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const blogDelete = await Blog.findByIdAndDelete(id)
        res.json(blogDelete)
    }catch(error)
    {
        throw new Error(error)
    }
})

module.exports = {
    createBlog,
    getAllBlog,
    getSingleBlog,
    updateBlog,
    deleteBlog
}