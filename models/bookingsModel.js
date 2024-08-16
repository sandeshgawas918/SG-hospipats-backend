const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor"
        },
        date: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        notes: {
            type: String
        }
    },
    { timestamps: true }
)

const Booking = mongoose.model('Booking', BookingSchema)

module.exports = Booking