const mongoose = require('mongoose'); 

var teamSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    designation:{
        type:String,
        required:true,
       
    },
    image:{
        type:String,
        required:true,
        
    },
    socialMediaLink:{
        facebookLink : {
            type : String
        },
        LinkedinLink : {
            type : String
        },
        instagramLink : {
            type : String
        },
    },
});

//Export the model
module.exports = mongoose.model('Team', teamSchema);