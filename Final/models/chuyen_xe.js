'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chuyen_Xe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association her

      Chuyen_Xe.belongsTo(models.Xe, {foreignkey : 'XeID'})
      Chuyen_Xe.hasMany(models.CT_Dat_Cho, {foreignKey: 'ChuyenXeId'})
      Chuyen_Xe.belongsTo(models.Dia_Diem, {foreignkey : 'Diem_Di'})
      Chuyen_Xe.belongsTo(models.Dia_Diem, {foreignkey : 'Diem_Den'})
      Chuyen_Xe.belongsTo(models.Nha_Xe,{foreignKey:"NhaXeId"});

    }
  }
  Chuyen_Xe.init({
    Gio_Bat_Dau: DataTypes.TIME,
    Tong_Thoi_Gian_Hanh_Trinh: DataTypes.DECIMAL,
    Diem_Di: DataTypes.INTEGER,
    Diem_Den: DataTypes.INTEGER,
    Ngay_Di: DataTypes.DATE,
    Gia_Ve: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Chuyen_Xe',
  });
  return Chuyen_Xe;
};