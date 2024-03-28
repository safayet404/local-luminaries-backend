const asyncHandler = require("express-async-handler");
const Tour = require("../models/tourModel");

const createTour = asyncHandler(async(req,res)=>{
    try{
        const tour = await Tour.create(req.body)
        res.json(tour)
    }catch(error)
    {
        throw new Error(error)
    }
})

const getAllTour = asyncHandler(async(req,res)=>{
    try{
        const allTour = await Tour.find()
        res.json(allTour)
    }catch(error)
    {
        throw new Error(error)
    }
})

const getSingleTour = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const singleTour = await Tour.findById(id)
        res.json(singleTour)
    }catch(error)
    {
        throw new Error(error)
    }
})

const updateTour = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const update = await Tour.findByIdAndUpdate(id,req.body,{new : true})
        res.json(update)
    }catch(error)
    {
        throw new Error(error)
    }
})

const deleteTour = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const tourDelete = await Tour.findByIdAndDelete(id)
        res.json(tourDelete)
    }catch(error)
    {
        throw new Error(error)
    }
})

module.exports = {
    createTour,
    getAllTour,
    getSingleTour,
    updateTour,
    deleteTour
}