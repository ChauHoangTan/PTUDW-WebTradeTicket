'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Danh_Gia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Danh_Gia.belongsTo(models.Khach_Hang,{foreignKey:'KhachHangId'});
      Danh_Gia.belongsTo(models.Nha_Xe,{foreignKey: 'NhaXeId'});
    }
  }
  Danh_Gia.init({
    stars: DataTypes.FLOAT,
    Noi_Dung: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Danh_Gia',
  });
  return Danh_Gia;
};