const authService = require('../services/auth.service');

const validateToken = async (req, res, next) => {
    const { authorization } = req.headers;
    const user = authService.validateToken(authorization);
    if (user.type === 401) return res.status(401).json({ message: 'Token not found' });
    if (user.type === 400) return res.status(401).json({ message: 'Expired or invalid token' });

    req.user = user;

    next();
};

module.exports = { validateToken };