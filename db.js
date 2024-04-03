const mongoose = require('mongoose');
require('dotenv').config()
// Mongoose connection Url
// const mongoURL=process.env.DB_LOCAL_URL local Url
const mongoURL=process.env.DB_URL

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