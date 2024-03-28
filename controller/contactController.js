const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const createContact = asyncHandler(async(req,res)=>{
    try{
        const contact = await Contact.create(req.body)
        res.json(contact)
    }catch(error)
    {
        throw new Error(error)
    }
})

const getAllContact = asyncHandler(async(req,res)=>{
    try{
        const allContact = await Contact.find()
        res.json(allContact)
    }catch(error)
    {
        throw new Error(error)
    }
})

const getSingleContact = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const singleContact = await Contact.findById(id)
        res.json(singleContact)
    }catch(error)
    {
        throw new Error(error)
    }
})

const updateContact = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const contactUpdate = await Contact.findByIdAndUpdate(id,req.body,{new : true})
        res.json(contactUpdate)
    }catch(error)
    {
        throw new Error(error)
    }
})

const deleteContact = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params 
        const contactDelete = await Contact.findByIdAndDelete(id)
        res.json(contactDelete)
    }catch(error)
    {
        throw new Error(error)
    }
})

module.exports = {
    createContact,
    getAllContact,
    getSingleContact,
    updateContact,
    deleteContact
}