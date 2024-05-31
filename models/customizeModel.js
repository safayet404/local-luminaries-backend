const mongoose = require('mongoose'); 

var userSchema = new mongoose.Schema({
    destination:{
        type:String,
        required:true,
    },
    person:{
        type:Number,
        required:true,   
    },
    date:{
        type:Date,
        required:true,
    },
    contact : {
        firstName : {
            type : String,
            required:true, 
        },
        lastName : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true
        },
        phone : {
            type : String,
            required : true
        }
    },
    address : {
        house : {
            type : String,
            required : true
        },
        road : {
            type : String,
            required : true
        },
        city : {
            type : String,
            required : true
        },
        postCode : {
            type : String,
            required : true
        }
    }
});

module.exports = mongoose.model('Customize', userSchema);