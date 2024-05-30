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
    }
});

//Export the model
module.exports = mongoose.model('User', userSchema);