const express=require('express')
const router=express.Router()
const Category=require('../models//categoryModel')

router.delete('/deletecategory',async(req,res)=>{
    console.log(req.body.id);
    
    const deletedEntry=await Category.findOneAndDelete({'_id':req.body.id})
    res.send(deletedEntry)
})

module.exports=router