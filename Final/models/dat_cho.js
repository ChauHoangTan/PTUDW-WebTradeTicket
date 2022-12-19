'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dat_Cho extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Dat_Cho.belongsTo(models.Khach_Hang,{foreignKey:'KhachHangId'});
      Dat_Cho.hasMany(models.CT_Dat_Cho,{foreignKey:'VeId'});
    }
  }
  Dat_Cho.init({
    Tong_Tien: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Dat_Cho',
  });
  return Dat_Cho;
};