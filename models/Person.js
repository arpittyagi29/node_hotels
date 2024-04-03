const mongoose = require('mongoose');
const bcrypt=require('bcrypt')

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    },
    number:{
        type:Number,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

personSchema.pre('save',async function(next){
    const person = this;
    //password modified
    if(!person.isModified('password')) return next();
    try{
    const salt= await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(person.password,salt)
    person.password=hashedPassword
    next();
    }
    catch(err){
return next(error)
    }
})


personSchema.methods.comparePassword= async function(cadidatePassword){
    try{
const isMatch=await bcrypt.compare(cadidatePassword,this.password)
return isMatch;
    }
    catch(err){
     throw err;
    }
}
const Person=mongoose.model("Person",personSchema)

module.exports=Person;


