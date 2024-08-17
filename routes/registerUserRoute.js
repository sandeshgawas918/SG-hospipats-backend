const express = require('express')
const router = express.Router()
const User = require('../models/usersModel.js')
const bcrypt = require('bcrypt')


router.post('/register', async (req, res) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10)

        const myUser = await User.create({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            mobile: req.body.mobile,
            password: hashPassword
        })
        res.send(myUser)

        console.log(myUser, req.body.password)

    } catch (error) {
        console.error("Error during user registration:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }

})

module.exports = router

