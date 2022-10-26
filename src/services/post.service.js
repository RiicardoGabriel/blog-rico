const { BlogPost, PostCategory, Category, User } = require('../models');
const jwtUtil = require('../utils/jwt.util');

const createPost = async (post) => {
  const { title, content, categoryIds } = post.body;
  const { authorization } = post.headers;

  const { id } = await jwtUtil.validateToken(authorization);

  const postObj = await BlogPost.create({ title, content, categoryIds, userId: id });

  categoryIds.forEach((idCat) => {
    PostCategory.create({ postId: postObj.id, categoryId: idCat });
  });

  return postObj;
};

const getPosts = async () => {
        const postsList = await BlogPost.findAll({
            include: [{ model: User, as: 'user', attributes: { exclude: 'password ' } }, 
            { model: Category, as: 'categories', through: { attributes: [] } }],
        });
  
        return postsList;
  };

module.exports = {
  createPost,
  getPosts,
};