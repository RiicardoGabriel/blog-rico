const { User } = require('../models');
const jwtUtil = require('../utils/jwt.util');

const createUser = async (acount) => {
  let { image } = acount;
  const { displayName, email, password } = acount;
  if (image === undefined) { image = ''; }
  const user = await User.create({ displayName, email, password, image });

  const { password: _, ...userWithoutPassword } = user.dataValues;
  const token = jwtUtil.createToken(userWithoutPassword);

  return token;
};

module.exports = {
  createUser,
};