'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ticket extends Model {
   
    static associate(models) {
      ticket.belongsTo(models.User, { foreignKey: 'userId', as: 'creator' });
    ticket.belongsTo(models.User, { foreignKey: 'assignId', as: 'assignee' });
    }
  }
  ticket.init({
    
    ticketId: DataTypes.STRING(20),
    title: DataTypes.STRING(50),
    description:DataTypes.STRING(500),
    userId:DataTypes.INTEGER,
    assignId:DataTypes.INTEGER,
    priority:DataTypes.ENUM('high','low'),
    status:DataTypes.ENUM('open','close')


  }, {
    sequelize,
    modelName: 'ticket',
  });
  return ticket;
};