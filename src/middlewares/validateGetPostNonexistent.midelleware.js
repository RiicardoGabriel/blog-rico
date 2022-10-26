const { BlogPost } = require('../models');

module.exports = async (req, res, next) => {
    const { id } = req.params;

    const posts = await BlogPost.findOne({
        where: { id },
    });

    if (posts === null) return res.status(404).json({ message: 'Post does not exist' });

    next();
  };