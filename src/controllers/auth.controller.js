const authService = require('../services/auth.service');

const login = async (req, res) => {
    const { email, password } = authService.validateBody(req.body);

    const token = await authService.validateLogin({ email, password });

    if (token.type === 400) return res.status(400).json({ message: 'Invalid fields' });

    console.log(token.type);

    res.status(200).json({ token });
};

module.exports = { login };