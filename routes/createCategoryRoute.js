const express = require('express')
const router = express.Router()
const Category = require('../models/categoryModel.js')
const upload = require('../middleware/multer.js')

router.post('/createCategory', upload.single('categoryicon'), async (req, res) => {

    if (req.file) {
        const category = await Category.create({
            categoryName: req.body.categoryName,
            icon: `/${req.file.originalname}`,
        })

        res.send(category)
    }
    else
    {
        console.log('Image not getting uploaded. [category route page error]');
    }

})

module.exports = router