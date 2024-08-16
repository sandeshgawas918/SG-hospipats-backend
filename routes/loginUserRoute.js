const express = require('express')
const router = express.Router()
const User = require('../models/usersModel.js')
const bcrypt = require('bcrypt')
const session = require('express-session')

router.post('/login', async (req, res) => {
    try {
        const enteredEmail = req.body.email
        const enteredPassword = req.body.password
        console.log(enteredPassword,enteredEmail);
        
        const matchedUser = await User.findOne({ email: enteredEmail })
        const comparePass = await bcrypt.compare(enteredPassword, matchedUser.password)

        if (matchedUser != null && comparePass) {
            res.cookie('userId',matchedUser._id)
            res.send({ success: true });
        }
        else {
            console.log('else block -> matchedUser != null && comparePass');
            res.status(400).json({ success: false })
        }
    } catch (error) {
        console.error("Error during user validation:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
})

module.exports = router