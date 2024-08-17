const express = require('express')
const router = express.Router()
const Category = require('../models/categoryModel.js')

router.get('/fetchCategories',async(req,res)=>{
    console.log('fetching categories')
    const allCategories=await Category.find().populate('categoryDoctor')
    res.send(allCategories)
})

module.exports=router