'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const items = require('./data/CT_Dat_Cho.json');

    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('CT_Dat_Chos', items, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CT_Dat_Chos', null, { truncate: true, cascade: true });
  }
};