const mongoose=require("mongoose")


const UserSchema=new mongoose.Schema({
    name:{type:String,require:true},
    age:{type:Number,require:true}
});

//create the User model using the schema
const User=mongoose.model('User', UserSchema)

module.exports=User