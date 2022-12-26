'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Chuyen_Xes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Gio_Bat_Dau: {
        type: Sequelize.TIME
      },
      Tong_Thoi_Gian_Hanh_Trinh: {
        type: Sequelize.DECIMAL
      },
      Diem_Di: {
        type: Sequelize.STRING
      },
      Diem_Den: {
        type: Sequelize.STRING
      },
      Ngay_Di: {
        type: Sequelize.DATE
      },
      Gia_Ve: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Chuyen_Xes');
  }
};