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
          res.status(400).json({ message: 'Ocorreu um erro.' });
        }
};

module.exports = {
  createUser,
  getAllUsers,
};