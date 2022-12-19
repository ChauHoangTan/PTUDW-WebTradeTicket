'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChuyenXe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ChuyenXe.belongsTo(models.Xe,{foreignKey:'XeId'});
      ChuyenXe.hasMany(models.CT_Dat_Cho,{foreignKey:'ChyenXeId'});
    }
  }
  ChuyenXe.init({
    Gio_Khoi_Hanh: DataTypes.TIME,
    Gio_Den_Noi: DataTypes.TIME,
    Diem_Di: DataTypes.STRING,
    Diem_Den: DataTypes.STRING,
    Gia_Ve: DataTypes.DECIMAL,
    Ngay_Di: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ChuyenXe',
  });
  return ChuyenXe;
};