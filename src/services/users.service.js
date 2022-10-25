const { User } = require('../models');

const login = async ({ email, password }) => 
  User.create({ email, password });

module.exports = {
    login,
};