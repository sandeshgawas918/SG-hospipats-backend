const express = require('express')
const router = express.Router()
const User = require('../models/usersModel.js')
const bcrypt = require('bcrypt')

router.post('/login', async (req, res) => {
    try {
        const enteredEmail = req.body.email
        const enteredPassword = req.body.password
        console.log(enteredPassword, enteredEmail);

        const matchedUser = await User.findOne({ email: enteredEmail })
        console.log(matchedUser)
        const comparePass = await bcrypt.compare(enteredPassword, matchedUser.password)

        if (matchedUser != null && comparePass) {
            res.cookie('userId', matchedUser._id, { httpOnly: true, secure: true, sameSite: 'None' });
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