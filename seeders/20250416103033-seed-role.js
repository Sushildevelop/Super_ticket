'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('roles', [
      { roleName: 'user', createdAt: new Date(), updatedAt: new Date() },
      { roleName: 'admin', createdAt: new Date(), updatedAt: new Date() },
      { roleName: 'staff', createdAt: new Date(), updatedAt: new Date() },
      { roleName: 'manager', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
