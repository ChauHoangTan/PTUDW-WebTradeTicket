'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ChuyenXes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Gio_Khoi_Hanh: {
        type: Sequelize.TIME
      },
      Gio_Den_Noi: {
        type: Sequelize.TIME
      },
      Diem_Di: {
        type: Sequelize.STRING
      },
      Diem_Den: {
        type: Sequelize.STRING
      },
      Gia_Ve: {
        type: Sequelize.DECIMAL
      },
      Ngay_Di: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('ChuyenXes');
  }
};