'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nha_Xe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Nha_Xe.hasMany(models.Nha_Xe_IMG,{foreignKey:'NhaXeId'});
      Nha_Xe.hasMany(models.Danh_Gia,{foreignKey:'NhaXeId'});
      Nha_Xe.hasMany(models.Xe,{foreignKey:'NhaXeId'});
      Nha_Xe.hasMany(models.Chuyen_Xe,{foreignKey:"NhaXeId"});
      
    }
  }
  Nha_Xe.init({
    ten_Nha_Xe: DataTypes.STRING,
    So_Luong_Xe: DataTypes.INTEGER,
    SDT: DataTypes.STRING,
    stars: DataTypes.FLOAT,
    Mo_ta: DataTypes.TEXT,
    Dia_Chi: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Nha_Xe',
  });
  return Nha_Xe;
};