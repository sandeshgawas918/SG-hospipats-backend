const express=require('express')
const router=express.Router()
const Booking=require('../models/bookingsModel')

router.delete('/deletebooking',async(req,res)=>{
    console.log(req.body.id);
    
    const deletedEntry=await Booking.findOneAndDelete({'_id':req.body.id})
    res.send(deletedEntry)
})

module.exports=router