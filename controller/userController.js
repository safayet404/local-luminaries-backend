const User = require("../models/userModel")

const asyncHandler = require("express-async-handler")

const createUser = asyncHandler(async(req,res)=>{
    const email = req.body.email

    const findUser = await User.findOne({email : email})

    if(!findUser)
    {
        const newUser = await User.create(req.body)
        res.json(newUser)
    }
    else
    {
        throw new Error("User already exist")
    }
})

const loginUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body
    const findUser = await User.findOne({email})
    if(findUser && (await findUser.isPasswordMatched(password)))
    {
        res.json(findUser)
    }
    else
    {
        throw new Error("Invalid Credentials")
    }
})

const loginAdmin = asyncHandler(async(req,res)=>{
    const {email,password} = req.body

    const findAdmin = await User.findOne({email})

    if(findAdmin.role !== "admin") throw new Error("Not Authorized")

    if(findAdmin && (await findAdmin.isPasswordMatched(password)))
    {
        res.json(findAdmin)
    }
    else
    {
        throw new Error("Invalid Credentials")
    }
})

const getAllUsers = asyncHandler(async(req,res)=>{
    try{
        const allUser = await User.find().sort({_id : - 1});
        res.json(allUser)
    }catch(error)
    {
        throw new Error(error)
    }
})

const getSingleUser = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params

        const singleUser = await User.findById(id).sort({_id : -1})
        res.json(singleUser)
    }catch(error)
    {
        throw new Error(error)
    }
})

const updateSingleUser = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params

        const updateUser = await User.findByIdAndUpdate(id,req.body,{new : true})
        res.json(updateUser)
    }catch(error)
    {
        throw new Error(error)
    }
})

const deleteSingleUser = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
       

        const findUser = await User.findById(id)
        if(findUser)
        {

            const userDelete = await User.findByIdAndDelete(id)
            res.json(userDelete)
        }
        else
        {
            throw new Error("Not exist")
    
        }
    }catch(error)
    {
        throw new Error(error)
    }
})
module.exports ={
    createUser,
    getAllUsers,
    getSingleUser,
    updateSingleUser,
    deleteSingleUser
}