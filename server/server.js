const express =require("express")
const mongoose =require('mongoose')
const cors =require("cors")
const usersModel=require('./models/users')
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/users");

app.post('/login',(req, res)=>{
    const {username, password}=req.body;
    usersModel.findOne({username:username})
    .then((user)=>{
        if (user){
            if (user.password==password){
                res.json("Success")
            }
            else{
                res.json("the password is incorrect")
            }
        }
        else{
            res.json("No record existed")
        }
    })
})

app.post('/userdetails',(req,res)=>{
    usersModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.listen(3001,()=>{
    console.log("server is running")
})