const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/user_database')
.then(() => {
    console.log("mongodb Connected")
})

.catch(() => {
    console.log("Connection Failed")
})

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection =new mongoose.model("C1",userSchema)
module.exports = collection