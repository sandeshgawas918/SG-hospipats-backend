const express = require('express')
const router = express.Router()
const Booking = require('../models/bookingsModel')
const User =require('../models/usersModel')
const authorizationMiddleware = require('../middleware/protectRoute')

router.get('/appointments', authorizationMiddleware , async (req, res) => {
    const id = req.cookies.userId
    const appts = await Booking.find({ user: id }).populate('doctor')

    res.send(appts)
})

module.exports = router