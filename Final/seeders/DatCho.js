'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const items = require('./data/Dat_Cho.json');

    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('Dat_Chos', items, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Dat_Chos', null, { truncate: true, cascade: true });
  }
};