const mongoose = require('mongoose'); 

var popularSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    
    },
    description:{
        type:String,
        required:true,
        
    },
    rating:{
        type:String,
        required:true,
        
    },
    price:{
        type:String,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('Popular', popularSchema);