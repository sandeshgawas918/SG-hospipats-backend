const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        fname: {
            type:String,
            required:true
        },
        lname:{
            type:String
        },
        email: {
            type:String,
            required:true,
            unique:true
        },
        mobile: {
            type:String,
            unique:true
        },
        password: {
            type:String,
            required:true
        }
    },
    { timestamps: true }
)

const User = mongoose.model('User', UserSchema)

module.exports = User