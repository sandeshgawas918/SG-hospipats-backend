const authorizationMiddleware = (req, res, next) => {
    const cookie = req.cookies.userId
    if (cookie) {
        console.log(cookie)
        next()
    }
    else {
        console.log('Permission denied');
        res.status(401).json({ success: false, message: 'Unauthorized' });
    }
}

module.exports = authorizationMiddleware