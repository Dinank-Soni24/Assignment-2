const jwt = require('jsonwebtoken');
const user = require('../models/user');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        
        // check token is match the user token or not
        user.findById(decoded.userId)
            .then(userData => {
                console.log(userData);
                if (token != userData.token) {
                    console.log('Token is Note found');
                    return res.status(401).json({ message: "Auth failed" });
                }
                console.log(decoded);
                req.userData = decoded;
                next();
            })
            .catch(err => {
                console.log(err);
                return res.status(500).json({
                    error: err
                });
            });
    } catch (err) {
        return res.status(401).json({
            message: 'Auth failed'
        })
    }

};