const jwt = require('jsonwebtoken');

//Creation of the authorization token for each page
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        console.log("token",token, "userId", userId, "decodedToken", decodedToken);
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user Id !';
        } else {
            next();
        }
    } catch (error) {
        console.log("error", error);
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};