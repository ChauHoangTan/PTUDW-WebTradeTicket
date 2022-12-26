'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const items = require('./data/Dia_Diem.json');

    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('Dia_Diems', items, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Dia_Diems', null, { truncate: true, cascade: true });
  }
};