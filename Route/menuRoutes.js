const express=require('express')
const router=express.Router();
const MenuItem=require('../models/MenuItem')

//-----------------------------------Get---------------------------------------//

router.get('/',async(req,res)=>{
    try{
    const data= await MenuItem.find()
      console.log("Menu Fetch")
        res.status(200).json(data)
    }
    catch(err){
    console.log(err)
    }
    })


router.get('/:taste',async(req,res)=>{
    try{
        const tastemenu=req.params.taste;
        if(tastemenu=='spicy'|| tastemenu=='sour'|| tastemenu=='sweet'){
        const response= await MenuItem.find({taste:tastemenu})
        res.status(200).json(response)
        }
    }
    catch(err){
    console.log(err);
    res.status(500).json({error:"Internal Server"})
    }
})

//-------------------------------Post----------------------------------------//


router.post('/',async(req,res)=>{
    try{
        const data=req.body;
        console.log(data)
    
        const newMenu= new MenuItem(data); 
         
        const response= await newMenu.save()
        console.log("Menu Data saved")
        res.status(200).json(response)
    }
    catch(err){
    console.log(err)
    res.status(500).json({error:'Internal server error'})
    }
    })

//----------------------------Put------------------------------------//

router.put('/:id', async (req,res)=>{
        try{
            const menuid=req.params.id
            const updatemenuitem=req.body;
            const response =await MenuItem.findByIdAndUpdate(menuid,updatemenuitem,{
                new:true
            })
            if(!response){
                return res.status(404).json({error:"Menu id not found"})
            }
            console.log("Menu item update")
            res.status(200).json(response)
        }

        catch(err){
            console.log(err)
            res.status(500).json({error:'Internal server error'})
            }  
    })
    
//-------------------------------------Delete--------------------------------------//

router.delete('/:id',async(req,res)=>{
    try{
        const menuid=req.params.id;
        const response= await MenuItem.findByIdAndDelete(menuid)
        if(!response){
            return res.status(404).json({error:"Menu id not found to Delete"})
        }
       console.log("Menu Item Deleted")
       res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})
    }
})

module.exports=router