
const { User, role } = require('../models');

module.exports = (allowedRoles) => async (req, res, next) => {

  const user = await User.findByPk(req.user.id, { include: role });
  console.log(user);
  if (!allowedRoles.includes(user.role.roleName)) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  next();
};
