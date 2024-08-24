const express=require('express')
const router=express.Router()
const Booking=require('../models/bookingsModel')

router.delete('/deletebooking/:id',async(req,res)=>{
    console.log(req.params.id);
    
    const deletedEntry=await Booking.findOneAndDelete({'_id':req.params.id})
    res.send(deletedEntry)
})

module.exports=router