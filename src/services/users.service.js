const { User } = require('../models');
const jwtUtil = require('../utils/jwt.util');

const createUser = async (acount) => {
  const { displayName, email, password, image } = acount;
  const user = await User.create({ displayName, email, password, image });

  const { password: _, ...userWithoutPassword } = user.dataValues;
  const token = jwtUtil.createToken(userWithoutPassword);

  return token;
};

const getAllUsers = async (_req, res) => {
  try {
    const usersList = await User.findAll({
      attributes: { exclude: ['password'] },
    });

    return usersList;
  } catch (e) {
    console.log(e.message);
    res.status(400).json({ message: 'An error has occurred' });
  }
};

const getIdUser = async (req, res) => {
  try {
    const [user] = await User.findAll({
      where: { id: req.params.id },
      attributes: { exclude: ['password'] },
    });
    console.log(user);
    if (user === undefined) { return { type: 404 }; }
    return user;
  } catch (e) {
    console.log(e.message);
    res.status(400).json({ message: 'An error has occurred' });
  }
};

const deleteUser = async (id) => {
  const delUser = await User.destroy({
    where: { id },
  });

  return delUser;
};

module.exports = {
  createUser,
  getAllUsers,
  getIdUser,
  deleteUser,
};