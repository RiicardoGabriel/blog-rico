const postService = require('../services/post.service');
const authService = require('../services/auth.service');

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

const putPostsId = async (req, res) => {
    const { authorization } = req.headers;
    const user = authService.validateToken(authorization);
    const userId = user.id;

    const getUser = await postService.getPostId(req);
    const postUserId = getUser.userId;

    if (userId !== postUserId) return res.status(401).json({ message: 'Unauthorized user' });

    const putPost = await postService.putPostId(req);

    return res.status(200).json(putPost);
};

const deletePost = async (req, res) => {
    const { authorization } = req.headers;
    const user = authService.validateToken(authorization);
    const userId = user.id;

    const getUser = await postService.getPostId(req);
    const postUserId = getUser.userId;

    if (userId !== postUserId) return res.status(401).json({ message: 'Unauthorized user' });
    
    const delPost = await postService.deletPosts(req);

    if (delPost) return res.status(204).json();
};

const searchPost = async (req, res) => {
    const searchPt = await postService.SearchPosts(req);

    return res.status(200).json(searchPt);
};

module.exports = {
    newPost,
    getPosts,
    getPostsId,
    putPostsId,
    deletePost,
    searchPost,
};