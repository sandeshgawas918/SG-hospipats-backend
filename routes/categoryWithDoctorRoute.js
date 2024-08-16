const express = require('express')
const router = express.Router()
const Category = require('../models/categoryModel.js')
const authorizationMiddleware = require('../middleware/protectRoute.js')

router.get('/categoryDoctor/:category', authorizationMiddleware , async (req, res) => {
    const categoryName = req.params.category
    try {
        const result = await Category.aggregate(
            [
                {
                    '$match': {
                        'categoryName': categoryName
                    }
                }, 
                {
                    '$lookup': {
                        'from': 'doctors',
                        'localField': 'categoryDoctor',
                        'foreignField': '_id',
                        'as': 'result'
                    }
                }
            ]
        )

        console.log("in category route ->", req.cookies.userId)
        
        res.send(result)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router