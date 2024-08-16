const express = require('express');
const router = express.Router();
const Category = require('../models/categoryModel');
const Doctor = require('../models/doctorModel');
const Booking = require('../models/bookingsModel');
const moment = require('moment');

// Route to get counts of all collections
router.get('/count', async (req, res) => {
    try {
        // Get the current date and time
        const now = moment(); // Get the current moment

        // Count documents in each collection
        const categoryCount = await Category.countDocuments({});
        const doctorCount = await Doctor.countDocuments({});
        
        // Count upcoming bookings (ensure the field name is correct)
        const upcomingCount = await Booking.countDocuments({
            date: { $gt: now.toDate().toISOString() } // Use the correct field name
        });

        const expiredCount = await Booking.countDocuments({
            date: { $lt: now.toDate().toISOString() } // Use the correct field name
        });

        // Send all counts in a single response
        res.status(200).json({
            categoryCount,
            doctorCount,
            upcomingCount,
            expiredCount
        });
    } catch (error) {
        console.error('Error fetching counts:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;