// const authService = require('../services/auth.service');

// module.exports = async (req, res, next) => {
//     const infoLogin = req.body;
//     const checkLogin = await authService.validateLogin(infoLogin);
  
//     if (checkLogin) {
//       return res.status(400).json({ message: 'Invalid fields' });
//     }

//     next();
//   };