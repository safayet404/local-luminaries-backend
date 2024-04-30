const asyncHandler = require("express-async-handler");
const Destination = require("../models/destinationModel")

const createDestination = asyncHandler(async(req,res)=>{
    try{
        const destination = await Destination.create(req.body)
        res.json(destination)

    }catch(error)
    {
        throw new Error(error)
    }
})

const getAllDestination = asyncHandler(async(req,res)=>{
    try{
        const allDestination = await Destination.find()
        res.json(allDestination)
    }catch(error)
    {
        throw new Error(error)
    }

})

const getSingleDestination = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const singleDestination = await Destination.findById(id)
        res.json(singleDestination)
    }catch(error)
    {
        throw new Error(error)
    }
})

const updateDestination = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params

        const destinationUpdate = await Destination.findById(id,req.body,{new : true})
        res.json(destinationUpdate)
    }catch(error)
    {
        throw new Error(error)
    }
})

const deleteDestination = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const destinationDelete = await Destination.findByIdAndDelete(id)
        res.json(destinationDelete)
    }catch(error)
    {
        throw new Error(error)
    }
})

module.exports = {
    createDestination,
    getAllDestination,
    getSingleDestination,
    updateDestination,
    deleteDestination
}