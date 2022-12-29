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
     * 
    */
    const items = [
      {imgPath:"/img/NhaXeImage/TienOanh/img1.jpg", NhaXeId: 1},
      {imgPath:"/img/NhaXeImage/TienOanh/img2.jpg", NhaXeId: 1},
      {imgPath:"/img/NhaXeImage/TienOanh/img3.jpg", NhaXeId: 1},
      {imgPath:"/img/NhaXeImage/TienOanh/img4.jpg", NhaXeId: 1},
      {imgPath:"/img/NhaXeImage/TienOanh/img5.jpg", NhaXeId: 1},

      {imgPath:"/img/NhaXeImage/PhuongTrang/img1.jpg", NhaXeId: 2},
      {imgPath:"/img/NhaXeImage/PhuongTrang/img2.jpg", NhaXeId: 2},
      {imgPath:"/img/NhaXeImage/PhuongTrang/img3.jpg", NhaXeId: 2},
      {imgPath:"/img/NhaXeImage/PhuongTrang/img4.jpg", NhaXeId: 2},
      {imgPath:"/img/NhaXeImage/PhuongTrang/img5.jpg", NhaXeId: 2},

      {imgPath:"/img/NhaXeImage/SaoViet/img1.jpg", NhaXeId: 3},
      {imgPath:"/img/NhaXeImage/SaoViet/img2.jpg", NhaXeId: 3},
      {imgPath:"/img/NhaXeImage/SaoViet/img3.jpg", NhaXeId: 3},
      {imgPath:"/img/NhaXeImage/SaoViet/img4.jpg", NhaXeId: 3},
      {imgPath:"/img/NhaXeImage/SaoViet/img5.jpg", NhaXeId: 3},

      {imgPath:"/img/NhaXeImage/SaoMai/img1.jpg", NhaXeId: 4},
      {imgPath:"/img/NhaXeImage/SaoMai/img2.jpg", NhaXeId: 4},
      {imgPath:"/img/NhaXeImage/SaoMai/img3.jpg", NhaXeId: 4},
      {imgPath:"/img/NhaXeImage/SaoMai/img4.jpg", NhaXeId: 4},
      {imgPath:"/img/NhaXeImage/SaoMai/img5.jpg", NhaXeId: 4},

      {imgPath:"/img/NhaXeImage/HaLongTravel/img1.jpg", NhaXeId: 5},
      {imgPath:"/img/NhaXeImage/HaLongTravel/img2.jpg", NhaXeId: 5},
      {imgPath:"/img/NhaXeImage/HaLongTravel/img3.jpg", NhaXeId: 5},
      {imgPath:"/img/NhaXeImage/HaLongTravel/img4.jpg", NhaXeId: 5},
      {imgPath:"/img/NhaXeImage/HaLongTravel/img5.jpg", NhaXeId: 5},

      {imgPath:"/img/NhaXeImage/QuocDat/img1.jpg", NhaXeId: 6},
      {imgPath:"/img/NhaXeImage/QuocDat/img2.jpg", NhaXeId: 6},
      {imgPath:"/img/NhaXeImage/QuocDat/img3.jpg", NhaXeId: 6},
      {imgPath:"/img/NhaXeImage/QuocDat/img4.jpg", NhaXeId: 6},
      {imgPath:"/img/NhaXeImage/QuocDat/img5.jpg", NhaXeId: 6},

      {imgPath:"/img/NhaXeImage/ThienThanh/img1.jpg", NhaXeId: 7},
      {imgPath:"/img/NhaXeImage/ThienThanh/img2.jpg", NhaXeId: 7},
      {imgPath:"/img/NhaXeImage/ThienThanh/img3.jpg", NhaXeId: 7},
      {imgPath:"/img/NhaXeImage/ThienThanh/img4.jpg", NhaXeId: 7},
      {imgPath:"/img/NhaXeImage/ThienThanh/img5.jpg", NhaXeId: 7},
      
    ]

    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })

    await queryInterface.bulkInsert('Nha_Xe_IMGs', items, {})

    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Nha_Xe_IMGs', null, {});
  }
};
