const express = require('express')
const authorizationMiddleware = require('../middleware/protectRoute')
const router = express.Router()

router.get('/logout', (req, res) => {
    const kk=req.cookies.userId
    console.log(kk)
    res.clearCookie("userId")
    res.status(200).json({ message: 'Logout successful' });
})

module.exports = router