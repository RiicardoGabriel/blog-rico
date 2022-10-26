const categoryService = require('../services/categories.service');

const getCategories = async (req, res) => {
    const categories = await categoryService.getAllCategories(req.body);

    return res.status(200).json(categories);
};

module.exports = {
    getCategories,
};