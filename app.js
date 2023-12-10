const express = require("express");
const app = express();
const mongoose = require("mongoose");
const users = require("./models/users")

mongoose.connect("mongodb://localhost:27017/registration-form");

app.use(express.static("public"));
app.use(express.json())

app.get('/',(req,res)=>{
    res.end();
})

app.post('/',async (req,res)=>{
  try{
    const user = await users.create({
        name:req.body.name,
        phoneNumber:req.body.phn,
        email:req.body.email,
        code:req.body.code,
        gender:req.body.gender
})
   res.sendStatus(200);
    res.end();
  } catch(err){
    console.log(err);
  }
})

app.listen(3000,()=>{
    console.log("server connected");
})