const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');
        
        if (!authHeader) {
            return res.status(401).json({ message: 'Authorization header missing' });
        }

        const token = authHeader.replace('Bearer ', '');
        
        if (!token) {
            return res.status(401).json({ message: 'Token missing in Authorization header' });
        }

        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Authentication failed', error });
    }
};
