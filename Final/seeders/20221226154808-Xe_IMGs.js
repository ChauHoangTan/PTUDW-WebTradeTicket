'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Xe_IMGs', [
        {
            
            XeId: 1,
            imgPath: '',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            
            XeId: 2,
            imgPath: '',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            
            XeId: 3,
            imgPath: '',
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
