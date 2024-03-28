const asyncHandler = require("express-async-handler");
const Video = require("../models/videoModel");

const createVideo = asyncHandler(async(req,res)=>{
    try{
        const video = await Video.create(req.body)
        res.json(video)
    }catch(error)
    {
        throw new Error(error)
    }
})

const getAllVideo = asyncHandler(async(req,res)=>{
    try{
        const allVideo = await Video.find()
        res.json(allVideo)
    }catch(error)
    {
        throw new Error(error)
    }
})

const getSingleVideo = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const singleVideo = await Video.findById(id)
        res.json(singleVideo)
    }catch(error)
    {
        throw new Error(error)
    }
})

const updateVideo = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const update = await Video.findByIdAndUpdate(id,req.body,{new : true})
        res.json(update)
    }catch(error)
    {
        throw new Error(error)
    }
})

const deleteVideo = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const videoDelete = await Video.findByIdAndDelete(id)
        res.json(videoDelete)
    }catch(error)
    {
        throw new Error(error)
    }
})

module.exports = {
    createVideo,
    getAllVideo,
    getSingleVideo,
    updateVideo,
    deleteVideo
}