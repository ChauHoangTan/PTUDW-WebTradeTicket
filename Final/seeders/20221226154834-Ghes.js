'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let xe = 0;
    let items = [];
    for (let i =1; i <= 30; i++){
      for(let j=0;j<32;j++){
        if (j<16){
          items[xe] = {XeId: i,LoaiGheId:'1'}
        }
        else{
          items[xe] = {XeId: i,LoaiGheId:'2'}
        }
        xe = xe + 1;
      }
    }
    items.forEach(item =>{
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('Ghes', items, {});
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
