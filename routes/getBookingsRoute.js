const express=require('express')
const router=express.Router()
const Booking=require('../models/bookingsModel')

router.get('/getbookings',async(req,res)=>{
    const bookings=await Booking.find().populate('user')
    res.send(bookings)
})

module.exports=router