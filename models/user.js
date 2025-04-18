'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    User.belongsTo(models.role, { foreignKey: 'roleId' });
    User.hasMany(models.ticket, { foreignKey: 'userId', as: 'createdTickets' });
    User.hasMany(models.ticket, { foreignKey: 'assignId', as: 'assignedTickets' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    roleId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};