const express = require('express')
const router = express.Router()

router.get('/logout', (req, res) => {
    const cookie = req.cookies.userId
    console.log(cookie)
    res.clearCookie("userId")
    res.status(200).json({ message: 'Logout successful' });
})

module.exports = router