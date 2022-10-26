const { Category } = require('../models');

const createCategory = async (req, res) => {
    const { name } = req.body;
    const cat = await Category.create({ name });
    const obj = { id: cat.dataValues.id, name };
    res.status(201).json(obj);
};

module.exports = {
    createCategory,
  };