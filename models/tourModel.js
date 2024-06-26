const mongoose = require('mongoose'); 


var tourSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
       
    },
    description:{
        type:String,
        required:true,
      
    },
    image:{
        type:String,
        required:true,
       
    },
    duration:{
        type:String,
        required:true,
       
    },
    date:{
        type:Date,
        required:true,
       
    },
    price:{
        type: Number,
        required:true,
    },
});

//Export the model
//checkiung it working or not
module.exports = mongoose.model('Tour', tourSchema);