const mongoose = require('mongoose'); 
var blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        
    },
    description:{
        type:String,
        required:true,
       
    },
    date:{
        type: Date,
        required:true,
        
    },
    image:{
        type:String,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('Blog', blogSchema);