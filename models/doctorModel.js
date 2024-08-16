const mongoose=require('mongoose')

const doctorSchema=new mongoose.Schema(
    {
        doctorName:{
            type:String
        },
        experience:{
            type:String
        },
        address:{
            type:String
        },
        doctorIcon:{
            type:String
        },
        speciality:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Category"
        },
    },
    {
        timestamps:true
    }
)

const Doctor=mongoose.model('Doctor',doctorSchema)

module.exports=Doctor