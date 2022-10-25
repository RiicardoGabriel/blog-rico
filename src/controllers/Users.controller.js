const usersService = require('../services/users.service');

const loginBlog = async (req, res) => {
  const newLogin = await usersService.login(req.body);

  return res.status(201).json(newLogin);
};

module.exports = {
    loginBlog,
};