const usersService = require('../services/users.service');
const test = require('../validations/users/createUserSchema');

const newUser = async (req, res) => {
  const { error } = test.validateBody(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const newLogin = await usersService.createUser(req.body);

  return res.status(201).json({ token: newLogin });
};

const getUsers = async (req, res) => {
  const users = await usersService.getAllUsers(req.body);

  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const user = await usersService.getIdUser(req);
  if (user.type === 404) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);
};

const deleteUs = async (req, res) => {
  const { id } = req.user;

  const delUser = await usersService.deleteUser(id);

  if (delUser) return res.status(204).json();
};

module.exports = {
  newUser,
  getUsers,
  getUserById,
  deleteUs,
};