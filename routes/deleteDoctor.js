const express=require('express')
const router=express.Router()
const Doctor=require('../models///doctorModel')

router.delete('/deletedoctor',async(req,res)=>{
    console.log(req.body.id);
    
    const deletedEntry=await Doctor.findOneAndDelete({'_id':req.body.id})
    res.send(deletedEntry)
})

module.exports=router