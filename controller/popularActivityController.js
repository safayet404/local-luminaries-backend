const asyncHandler = require("express-async-handler");
const Activity = require("../models/popularActivityModel");


const createActivity = asyncHandler(async(req,res)=>{
    try{
        const activity = await Activity.create(req.body)
        res.json(activity)
    }catch(error)
    {
        throw new Error(error)
    }
})

const getAllActivity = asyncHandler(async(req,res)=>{
    try{
        const allActivity = await Activity.find()
        res.json(allActivity)
    }catch(error)
    {
        throw new Error(error)
    }
})

const getSingleActivity = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const singleActivity = await Activity.findById(id)
        res.json(singleActivity)
    }catch(error)
    {
        throw new Error(error)
    }
})

const updateActivity = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const update = await Activity.findByIdAndUpdate(id,req.body,{new : true})
        res.json(update)
    }catch(error)
    {
        throw new Error(error)
    }
})

const deleteActivity = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params

        const activityDelete = await Activity.findByIdAndDelete(id)
        res.json(activityDelete)
    }catch(error)
    {
        throw new Error(error)
    }
})

module.exports = {
    createActivity,
    getAllActivity,
    getSingleActivity,
    updateActivity,
    deleteActivity
}