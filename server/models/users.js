const mongoose=require('mongoose')
const usersSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    username:String
})
const usersModel=mongoose.model("userdetails",usersSchema)
module.exports=usersModel