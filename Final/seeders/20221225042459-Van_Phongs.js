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
      {van_phong:'Văn phòng Tân Bình: 266 Đồng Đen, Tân Bình, TP.HCM', NhaXeId: 1},
      {van_phong:'Văn phòng Thủ Đức: 804 Song Hành Hà Nội, Quận 9, TP.HCM', NhaXeId: 1},
      {van_phong:'Văn Phòng Buôn Mê Thuột: 134 Hai Bà Trưng, Buôn Mê Thuột', NhaXeId: 1},
      {van_phong:'Văn Phòng Đà Lạt: 272 Phù Đổng Thiên Vương, Đà Lạt', NhaXeId: 1},

      {van_phong:'Văn Phòng TPHCM: 468-468A Lê Văn Lương, P.Tân Phong, Q.7, TP Hồ Chí Minh.', NhaXeId: 2},
      {van_phong:'Văn Phòng Biên Hòa: D9 Tổ 2, KP4, XLHN, P.Long Bình, TP. Biên Hòa', NhaXeId: 2},
      {van_phong:'Văn phòng Vũng Tàu: Thôn Tân Ngọc, TT.Phú Mỹ, H.Tân Thành, Bà Rịa - Vũng Tàu', NhaXeId: 2},
      {van_phong:'Văn phòng Bình Thuận: 64 Trần Quý Cáp, TP.Phan Thiết, Bình Thuận', NhaXeId: 2},

      {van_phong:'Văn Phòng Hà Nội: Số 123, ngõ 85, Tân Xuân, Xuân Đỉnh, Bắc Từ Liêm, TP Hà Nội.', NhaXeId: 3},
      {van_phong:'Văn Phòng Hà Nội: 789 Giải Phóng, Hoàng Mai, Hà Nội', NhaXeId: 3},
      {van_phong:'Văn Phòng Hà Nội: Quầy vé 36 BX Mỹ Đình, Phạm Hùng, Nam Từ Liêm, Hà Nội', NhaXeId: 3},
      {van_phong:'Văn Phòng Lào Cai: 571 Điện Biên Phủ, Sapa, Lào Cai', NhaXeId: 3},

      {van_phong:'Văn Phòng Sapa: 03 Đường N2 - Chợ Mới Sapa  - TX Sapa - TP Lào Cai', NhaXeId: 4},
      {van_phong:'Văn Phòng Lào Cai: 98 Minh Khai ( Cây xăng Phố Mới ) - Tp Lào Cai.', NhaXeId: 4},
      {van_phong:'Văn phòng Hải Phòng: Bx Vĩnh Niệm', NhaXeId: 4},
      {van_phong:'Văn phòng Quảng Ninh: Số 256 Nguyễn Văn Cừ, TP. Hạ Long, Quảng Ninh', NhaXeId: 4},

      {van_phong:'Văn Phòng TPHCM: 450h Điện Biên Phủ , phường 21 , quận Bình Thạnh , tp Hồ Chí Minh.', NhaXeId: 5},
      {van_phong:'Văn Phòng Hà Nội: 107 Phố Vọng, phường Đồng Tâm, quận Hai Bà Trưng, Hà Nội', NhaXeId: 5},
      {van_phong:'Văn Phòng Hà Nội: 21 Tú Mỡ, Phường Trung Hoà, Quận Cầu Giấy, Hà Nội', NhaXeId: 5},
      {van_phong:'Văn Phòng Quảng Ninh: Số 256 Nguyễn Văn Cừ, TP. Hạ Long, Quảng Ninh', NhaXeId: 5},

      {van_phong:'Văn Phòng Đà Nẵng: 48 Bắc Sơn, P. Hòa An, Q. Cẩm Lệ, Đà Nẵng.', NhaXeId: 6},
      {van_phong:'Văn Phòng Đà Nẵng: 201 Tôn Đức Thắng, P.Hòa Minh, Q.Liên Chiểu, Đà Nẵng', NhaXeId: 6},
      {van_phong:'Văn Phòng Quảng Nam: QL14B, H.Đại Lộc, Quảng Nam', NhaXeId: 6},
      {van_phong:'Văn Phòng Kon Tum: 281 Phan Đình Phùng, P.Quang Trung, Tp. Kon Tum, Kon Tum', NhaXeId: 6},

      {van_phong:'Văn phòng Tân Phú: 20 Hoa Bằng, Tân Phú.', NhaXeId: 7},
      {van_phong:'Văn Phòng TPHCM: 327 Trần Phú, Phường 8, Quận 5, TP.HCM', NhaXeId: 7},
      {van_phong:'Văn Phòng Kiên Giang: Căn 21 P39 Mai Chí Thọ, Khu đô thị Phú Gia, Kiên Giang', NhaXeId: 7},
      {van_phong:'Văn Phòng TPHCM: 20 Hoa Bằng, P.Tân Sơn Nhì, Q.Tân Phú, TP.HCM', NhaXeId: 7},

    ]

    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })

    await queryInterface.bulkInsert('Van_Phongs', items, {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Van_Phongs', null, {});
  }
};
