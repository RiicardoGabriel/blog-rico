const { BlogPost, PostCategory } = require('../models');
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

module.exports = {
  createPost,
};