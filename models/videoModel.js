const mongoose = require('mongoose');


var videoSchema = new mongoose.Schema({
    link:{
        type:String,
        required:true,
        
    },
    thumbnail:{
        type:String,
        required:true,
        
    },
   
});

//Export the model
module.exports = mongoose.model('Video', videoSchema);