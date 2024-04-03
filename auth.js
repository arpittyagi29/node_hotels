const passport= require('passport')
const localStrategy=require('passport-local').Strategy
const Person=require('./models/Person')


passport.use(new localStrategy(async(username,Password,done)=>{
    try{
    console.log("Recieved Credital")
    const  user=await Person.findOne({username})
    if(!user)
        return done(null,false,{message:"Incorrect user name"})
    const isPasswordMatch=await user.comparePassword(Password)
    if(isPasswordMatch)
        return done(null,user);
    else
       return done(null,false,{message:"Incorrect Password"})
    }
    catch(err){
     return done(err);
    }
}))

module.exports=passport