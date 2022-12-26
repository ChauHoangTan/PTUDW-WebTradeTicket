'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const items = require('./data/Danh_Gia.json');

    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('Danh_Gias', items, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Danh_Gias', null, { truncate: true, cascade: true });
  }
};