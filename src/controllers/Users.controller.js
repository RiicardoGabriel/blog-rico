const usersService = require('../services/users.service');
const test = require('../validations/users/createUserSchema');

const newUser = async (req, res) => {
  const { error } = test.validateBody(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const newLogin = await usersService.createUser(req.body);

  return res.status(201).json({ token: newLogin });
};

module.exports = {
  newUser,
};