require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_DB}/doctor-appointment-booking`)
    } catch (error) {
        console.log('Error while making DB connection on db.js page', error);
    }
}

module.exports = connectDB