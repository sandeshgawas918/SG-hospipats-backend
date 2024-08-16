const express = require('express')
const router = express.Router()
const Booking = require('../models/bookingsModel')
const User= require('../models/usersModel')
const Doctor=require('../models/doctorModel')

router.post('/booking', async (req, res) => {
    const doc=req.body.doctorId
    try {
        const myBooking = await Booking.create({
            user: await User.findOne({'_id':req.cookies.userId}),
            doctor:await Doctor.findOne({'_id':doc}),
            date: req.body.date,
            time: req.body.selectedTime,
            notes: req.body.notes
        })
        res.send(myBooking)
    } catch (error) {
        console.log('Error while booking appointment', error);
    }
})

module.exports = router