const mongoose = require('mongoose');


var activitySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
       
    },
    description:{
        type:String,
        required:true,
       
    },
    icon:{
        type:String,
        required:true,
       
    },

});

//Export the model
module.exports = mongoose.model('Activity', activitySchema);