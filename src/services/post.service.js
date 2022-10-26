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

const getPostId = async (postId) => {
    const postListId = await BlogPost.findOne({
        where: { id: postId.params.id },
        include: [{ model: User, as: 'user', attributes: { exclude: 'password ' } },
        { model: Category, as: 'categories', through: { attributes: [] } }],
    });

    return postListId;
};

const putPostId = async (postId) => {
    const { title, content } = postId.body;
    const { id } = postId.params;
    await BlogPost.update({ title, content }, { where: { id } });
    const postListId = await BlogPost
        .findByPk(id, {
            include: [
                { model: User, as: 'user', attributes: { exclude: 'password ' } },
                { model: Category, as: 'categories', through: { attributes: [] } },
            ],
        });

    return postListId;
};

const deletPosts = async (postId) => {
    const { id } = postId.params;
    const postListId = await BlogPost.destroy({
        where: { id },
    });

    return postListId;
};

module.exports = {
    createPost,
    getPosts,
    getPostId,
    putPostId,
    deletPosts,
};