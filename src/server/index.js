const express =require("express")
const mongoose =require('mongoose')
const cors =require("cors")
const usersModel=require('./models/users')

const app=express()
app.use(cors({
    origin:['https://language-translator.vercel.app'],
    methods:['POST', 'GET'],
    credentials:true
}))
app.use(express.json())

mongoose.connect('mongodb+srv://sohan:3oNa23QDOR6NI62f@cluster0.l7eklrw.mongodb.net/');

app.get('/', (req, res)=>{
    res.json("Hello");
})

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

app.listen(3001, ()=>{
    console.log("Server is running")
})
