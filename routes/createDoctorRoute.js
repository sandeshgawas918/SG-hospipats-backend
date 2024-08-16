const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer.js");
const Doctor = require("../models/doctorModel.js");
const Category = require('../models/categoryModel.js')

router.post('/createDoctor', upload.single('doctorIcon'), async (req, res) => {
    const { speciality } = req.body
    const myCategory = await Category.findOne({ _id: speciality })
    if (speciality) {
        try {
            const doc = await Doctor.create({
                doctorName: req.body.doctorName,
                address: req.body.address,
                experience: req.body.experience,
                speciality: speciality,
                doctorIcon: `/${req.file.originalname}`,
            });
            myCategory.categoryDoctor.push(doc._id)
            await myCategory.save()

            res.send(doc);
        } catch (error) {
            console.log("Error while adding doctor Backend : ", error);
        }
    }
    else {
        console.log('category not availablee.');
    }
})

module.exports = router;
