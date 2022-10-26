const postService = require('../services/post.service');

const newPost = async (req, res) => {
    const newP = await postService.createPost(req);

    return res.status(201).json(newP);
};

const getPosts = async (_req, res) => {
    const getPost = await postService.getPosts();

    return res.status(200).json(getPost);
};

const getPostsId = async (req, res) => {
    const getPost = await postService.getPostId(req);

    return res.status(200).json(getPost);
};

module.exports = {
    newPost,
    getPosts,
    getPostsId,
};