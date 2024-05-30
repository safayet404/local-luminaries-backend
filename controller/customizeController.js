const asyncHandler = require("express-async-handler");
const Customization = require("../models/customizeModel")

const createCustomizeTour = asyncHandler(async(req,res)=>{
    try{
        const customizationTour = await Customization.create(req.body)
        res.json(customizationTour)
    }catch(error)
    {
        throw new Error(error)
    }
})

const getAllCustomizeTour = asyncHandler(async(req,res)=>{
    try{
        const allTour = await Customization.find()
        res.json(allTour)
    }catch(error)
    {
        throw new Error(error)
    }
})

const getSingleCustomizeTour = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const singleTour = await Customization.findById(id)
        res.json(singleTour)
    }catch(error)
    {
        throw new Error(error)
    }
})

const updateCustomizeTour = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const updateTour = await Customization.findByIdAndUpdate(id,req.body,{new : true})
        res.json(updateTour)
    }catch(error) 
    {
        throw new Error(error)
    }
})

const deleteCustomizeTour = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const deleteTour = await Customization.findByIdAndDelete(id)
        res.json(deleteTour)
    }catch(error)
    {
        throw new Error(error)
    }
})

module.exports = {
    createCustomizeTour,
    getAllCustomizeTour,
    getSingleCustomizeTour,
    updateCustomizeTour,
    deleteCustomizeTour 
}