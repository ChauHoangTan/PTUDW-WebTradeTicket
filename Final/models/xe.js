'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Xe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Xe.belongsTo(models.Loai_Xe,{foreignKey:'LoaiXeId'});
      Xe.belongsTo(models.Nha_Xe,{foreignKey:'NhaXeId'});
      Xe.hasMany(models.Ghe,{foreignKey:'XeId'});
      Xe.hasMany(models.Chuyen_Xe,{foreignKey:'XeId'});
      Xe.hasMany(models.Xe_IMG,{foreignKey:'XeId'});

    }
  }
  Xe.init({
    Bien_So_xe: DataTypes.STRING,
    So_Luong_Ghe: DataTypes.INTEGER,
    Mo_ta: DataTypes.TEXT,
    Chinh_sach: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Xe',
  });
  return Xe;
};