const express = require('express');
const { login } = require('./controllers/auth.controller');
const { newUser, getUsers, getUserById } = require('./controllers/Users.controller');
const { createCategory } = require('./services/categories.service');
const { getCategories } = require('./controllers/Categories.controller');
const { newPost, getPosts, getPostsId } = require('./controllers/Post.controller');

const validateLogin = require('./middlewares/validateLogin.middleware');
const validateToken = require('./middlewares/auth.middleware');
const validateDisplayName = require('./middlewares/validateCreateUserDisplayName.middleware');
const validateEmail = require('./middlewares/validateCreateUserEmail.middleware');
const validatePassword = require('./middlewares/validateCreateUserPassword.middleware');
const validateEmailRegist = require('./middlewares/validateCreateUserEmailRegistered.middleware');
const validateCreateCategory = require('./middlewares/validateCreateCategory.middleware');
const validateCreatePost = require('./middlewares/validateCreatePost.middleware');
const validateCreatPostCategory = require('./middlewares/validateCreatePostCategory.middleware');
const validateGetPostNonexistent = require('./middlewares/validateGetPostNonexistent.midelleware');

const app = express();

app.use(express.json());

app.get('/user', validateToken.validateToken, getUsers);
app.get('/user/:id', validateToken.validateToken, getUserById);
app.post('/login', validateLogin, login);

app.post('/user', validateDisplayName,
validateEmailRegist,
validatePassword,
validateEmail,
newUser);

app.post('/categories', validateToken.validateToken, validateCreateCategory,
createCategory);

app.get('/categories', validateToken.validateToken, getCategories);

app.post('/post',
validateToken.validateToken,
validateCreatePost,
validateCreatPostCategory,
newPost);
app.get('/post', validateToken.validateToken, getPosts);
app.get('/post/:id', validateToken.validateToken, validateGetPostNonexistent, getPostsId);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
