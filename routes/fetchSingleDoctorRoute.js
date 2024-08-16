const express = require('express')
const router = express.Router()
const Doctor = require('../models/doctorModel.js');
const authorizationMiddleware = require('../middleware/protectRoute.js');

router.get('/fetchSingleDoctor/:id',authorizationMiddleware, async (req, res) => {
  const id = req.params.id
  console.log(req.params.id, id);

  try {
    const doc = await Doctor.findById(id).populate('speciality');
    res.send(doc)
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching single data');
  }
});


module.exports = router