const postService = require('../services/post.service');

const newPost = async (req, res) => {
  const newP = await postService.createPost(req);

  return res.status(201).json(newP);
};

module.exports = {
  newPost,
};