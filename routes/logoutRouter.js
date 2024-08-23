const express = require('express')
const router = express.Router()

router.get('/logout', (req, res) => {
    console.log('logout hit')
    const kk=req.cookies.userId
    console.log(kk)
    res.clearCookie("userId")
    res.status(200).json({ message: 'Logout successful' });
    console.log('logout hit over')
})

module.exports = router