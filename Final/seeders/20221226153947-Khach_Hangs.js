'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const items = [
      { Ho_Ten: 'Hua Lam Chi Cuong', SDT: '0811337721',Nam_sinh: '2002',Gioi_Tinh:'nam', email: 'hualamchicuong@gmail.com',username: 'Ccuong', password: '12345678'},
      { Ho_Ten: 'Chau Hoang Tan', SDT: '0123456789',Nam_sinh: '2002',Gioi_Tinh:'nam' ,email: 'tanchau@gmail.com',username: 'Ctan', password: '87654321'},
      { Ho_Ten: 'Nguyen Huy Hoan', SDT: '0955421678',Nam_sinh: '2002',Gioi_Tinh:'nam', email: 'nguyenhhoan@gmail.com',username: 'Hhoan', password: '135792468'},
      { Ho_Ten: 'Ngo Anh Vu', SDT: '0331546123',Nam_sinh: '2002',Gioi_Tinh:'nam', email: 'anhvungo@gmail.com',username: 'Avu', password: '0987654321'}
    ];

    items.forEach(item =>{
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })

    await queryInterface.bulkInsert('Khach_Hangs', items, {});
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
