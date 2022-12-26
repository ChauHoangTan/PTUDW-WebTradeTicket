'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Xe_IMG', [
        {
            XeImgId: 1,
            XeId: 1,
            img_Path: '',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            XeImgId: 2,
            XeId: 2,
            img_Path: '',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            XeImgId: 3,
            XeId: 3,
            img_Path: '',
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
