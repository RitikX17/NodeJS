const mongoose = require('mongoose');
const express = require('express');
mongoose.connect("mongodb+srv://Ritik:pass1234@arnav.6apvyr2.mongodb.net/UsersDB");
const app = express();
const User = mongoose.model('Users',{name:String, email: String, password:String});

app.use(express.json())

app.post('/signup',async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email:username});

    if(existingUser){
        return res.status(400).send("User already exists");
    }
    const user = new User({name:name,email:username,password:password});
    user.save();
    res.json({
        msg:"User created successfully"
    })
})
app.listen(3000,()=>{
    console.log("Listning on port 3000")
});