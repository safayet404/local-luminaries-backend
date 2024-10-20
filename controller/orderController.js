const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel")

const createOrder = asyncHandler(async(req,res)=>{
    try{
        const order = await Order.create(req.body)
        res.json(order)
    }catch(error)
    {
        throw new Error(error)
    }
})

const getAllOrder = asyncHandler(async(req,res)=>{
    try{
        const allOrder = await Order.find().populate('tourId')
        res.json(allOrder)
    }catch(error)
    {
        throw new Error(error)
    }
})

const getSingleOrder = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const singleOrder = await Order.findById(id).populate('tourId')
        res.json(singleOrder)
    }catch(error)
    {
        throw new Error(error)
    }
}) 
const orderByUser = asyncHandler(async(req,res)=>{
    try{
        const {userId} = req.params
        const userOrder = await Order.find({userId : userId}).populate('tourId')
        res.json(userOrder)

    }catch(error)
    {
        throw new Error(error)
    }
})

const updateOrder = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const orderUpdate = await Order.findByIdAndUpdate(id,req.body,{new : true})
        res.json(orderUpdate)
    }catch(error)
    {
        throw new Error(error)
    }
})

const deleteOrder = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const orderDelete = await Order.findByIdAndDelete(id)
        res.json(orderDelete)
    }catch(error)
    {
        throw new Error(error)
    }
})

module.exports ={
    createOrder,
    getAllOrder,
    getSingleOrder,
    updateOrder,
    deleteOrder,
    orderByUser
}
