const mongoose = require('mongoose'); 
var destinationSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
   
});

//Export the model
module.exports = mongoose.model('Destination', destinationSchema);