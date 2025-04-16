'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ticketId: {
        type: Sequelize.STRING(20)
      },
      title: {
        type: Sequelize.STRING(50)
      },
      description:{
        type:Sequelize.STRING(500)
      },
      userId:{
           type:Sequelize.INTEGER
      },
      assignId:{
         type:Sequelize.INTEGER
      },
      priority:{
          type:Sequelize.ENUM("high","low")
      },
      status:{
          type:Sequelize.ENUM("open","close")
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tickets');
  }
};