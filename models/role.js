'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    
    static associate(models) {
      role.hasMany(models.User, { foreignKey: 'roleId' });
    }
  }
  role.init({
    roleName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'role',
  });
  return role;
};