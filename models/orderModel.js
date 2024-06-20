const mongoose = require('mongoose');


var orderSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        
    },
    lastName:{
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
    address:{
        house : {
            type : String,
        },
        road : {
            type : String
        },
        city : {
            type : String
        },
        postCode : {
            type : String
        }
    },
    tourId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Tour"
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    person : {
        type : Number,
        required : true
    },
    
    price : {
        type : Number,
        required : true
    },
    totalAmount : {
        type : Number,
        required : true
    },
    paidAmount : {
        type : Number,
        required : true
    },
    dueAmount : {
        type : Number,
        required : true
    }

});



module.exports = mongoose.model('Order', orderSchema);