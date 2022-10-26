const { Category } = require('../models');

module.exports = async (req, res, next) => {
    const { categoryIds } = req.body;

    const findCategory = await Promise.all(categoryIds.map((id) => 
    Category.findByPk(id)));

    if (findCategory.includes(null)) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
}

    next();
  };