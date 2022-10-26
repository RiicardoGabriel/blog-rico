const { Category } = require('../models');

const createCategory = async (req, res) => {
    const { name } = req.body;
    const cat = await Category.create({ name });
    const obj = { id: cat.dataValues.id, name };
    res.status(201).json(obj);
};

const getAllCategories = async (_req, res) => {
    try {
        const usersList = await Category.findAll();
  
        return usersList;
          } catch (e) {
            console.log(e.message);
            res.status(400).json({ message: 'An error has occurred' });
          }
};

module.exports = {
    createCategory,
    getAllCategories,
  };