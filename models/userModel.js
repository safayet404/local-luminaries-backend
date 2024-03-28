const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require('bcrypt')
var userSchema = new mongoose.Schema({
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
    password:{
        type:String,
        required:true,
        
    },
    role :{
        type :String,
        default : "user"
    },

},{timestamps : true});

userSchema.pre('save',async function(next){
    const salt = await bcrypt.genSaltSync(10)
    this.password = await bcrypt.hash(this.password,salt)
})

userSchema.methods.isPasswordMatched = async function(enterdPassword){
    return await bcrypt.compare(enterdPassword,this.password)
}

module.exports = mongoose.model('User', userSchema);