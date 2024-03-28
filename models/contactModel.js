const mongoose = require('mongoose'); 


var contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
         
    },
    message:{
        type:String,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('Contact', contactSchema);