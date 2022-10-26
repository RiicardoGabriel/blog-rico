// const { User } = require('../models');

module.exports = async (req, res, next) => {
    const { email } = req.body;
    const filter = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;

    if (!filter.test(email)) {
        return res.status(400).json({ message: '"email" must be a valid email',
    }); 
}

    next();
  };