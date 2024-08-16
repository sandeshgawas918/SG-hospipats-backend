const mongoose=require('mongoose')

const connectDB=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/doctor-appointment-booking')
    } catch (error) {
        console.log('error while making DB connection on db.js page', error);
    }
}

module.exports=connectDB