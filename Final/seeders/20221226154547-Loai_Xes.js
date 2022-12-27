'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Loai_Xes', [
        {
            
            Ten_Loai: 'Xe 32 chỗ',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            
            Ten_Loai: 'Xe 45 chỗ',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            
            Ten_Loai: 'Xe 50 chỗ',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            
            Ten_Loai: 'Xe 60 chỗ',
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
