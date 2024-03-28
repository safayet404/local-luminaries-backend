const asyncHandler = require("express-async-handler");
const Team = require("../models/teamModel");

const createTeam = asyncHandler(async(req,res)=>{
    try{
        const team = await Team.create(req.body)
        res.json(team)
    }catch(error)
    {
        throw new Error(error)
    }
})

const getAllTeam = asyncHandler(async(req,res)=>{
    try{
        const allTeam = await Team.find()
        res.json(allTeam)
    }catch(error)
    {
        throw new Error(error)
    }
})

const getSingleTeam = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const singleTeam = await Team.findById(id)
        res.json(singleTeam)
    }catch(error)
    {
        throw new Error(error)
    }
})

const updateTeam = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const update = await Team.findByIdAndUpdate(id,req.body,{new : true})
        res.json(update)
    }catch(error)
    {
        throw new Error(error)
    }
})

const deleteTeam = asyncHandler(async(req,res)=>{
    try{
        const {id} =  req.params
        const teamDelete = await Team.findByIdAndDelete(id)
        res.json(teamDelete)
    }catch(error)
    {
        throw new Error(error)
    }
})

module.exports = {
    createTeam,
    getAllTeam,
    getSingleTeam,
    updateTeam,
    deleteTeam
}