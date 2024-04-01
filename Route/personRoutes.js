const express=require('express')
const router=express.Router();
const Person=require('../models/Person')

//--------------------------------Get---------------------------------------//

router.get('/',async(req,res)=>{
    try{
    const data= await Person.find()
      console.log("Person details Fetch")
        res.status(200).json(data)
    }
    catch(err){
    console.log(err)
    }
    })


router.get('/:workType', async (req,res)=>{
        try{
            const workType=req.params.workType;
        if(workType=='chef' || workType=='waiter' || workType=='manager' ){
         const response= await Person.find({work:workType})
         res.status(200).json(response)
        }else
        res.status(404).json({error:"Invalid work type"})
        }
        catch(err){
            console.log(err)
            res.status(500).json({error:'Internal server error'})
        }
        
    })


//------------------------------------Post--------------------------------------//


router.post('/',async(req,res)=>{
    
    try{
        const data=req.body;
        console.log(data)
        console.log("fetch")
    
        const newPerson= new Person(data); 
         
        const response= await newPerson.save()
        console.log("Person data saved")
        res.status(200).json(response)
    }
    catch(err){
    console.log(err)
    res.status(500).json({error:'Internal server error'})
    }
    })


//-------------------------------Put----------------------------------------------//

router.put('/:id',async (req,res)=>{
    try{
     const personId=req.params.id;
     const updatePersonData=req.body;
     const response =await Person.findByIdAndUpdate(personId,updatePersonData,{
        new:true, //return update record
        runValidators:true // check validation in model of person 
     })
     if(!response){
        return res.status(404).json({error:'Person not found'})
     }
     console.log("Data update")
     res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})
    }
})


//--------------------------------Delete-----------------------------------//

router.delete('/:id',async(req,res)=>{
    try{
       const personid=req.params.id;
       const response= await Person.findByIdAndDelete(personid)
       if(!response)
       return res.status(404).json({error:"Not able to find person "})
      console.log("Person deleted")
      res.status(200).json(response)
    }
    catch(err){
      console.log(err)
      res.status(500).json({error:"Internal server error"})
    }
})
    

module.exports=router