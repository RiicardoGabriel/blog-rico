const express = require('express');
const { login } = require('./controllers/auth.controller');

const validateLogin = require('./middlewares/validateLogin.middleware');
// const validateLoginNotExist = require('./middlewares/validateLoginNotExist.middleware');

const app = express();

app.use(express.json());

app.post('/login',
validateLogin,
// validateLoginNotExist,
login);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
