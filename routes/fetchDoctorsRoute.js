const express=require('express')
const router=express.Router()
const Doctor=require('../models/doctorModel.js')

router.get('/fetchDoctors',async(req,res)=>{
    try {
        const docs = await Doctor.aggregate([
          {
            $lookup: {
              from: "categories",
              localField: "speciality",
              foreignField: "_id",
              as: "category"
            }
          }
        ]);
        res.send(docs);
      } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching data');
      }
})

module.exports=router