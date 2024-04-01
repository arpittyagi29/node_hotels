const mongoose = require('mongoose');
// Mongoose connection Url
const mongoURL='mongodb://127.0.0.1:27017/Student'

mongoose.connect(mongoURL,{
})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("DB Connected")
})

db.on('disconnected',()=>{
    console.log("DB Disconnected")
})

db.on('error',()=>{
    console.log("DB Error")
})


module.exports=db