'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loai_Xe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Loai_Xe.hasMany(models.Xe,{foreignKey:'LoaiXeId'});
    }
  }
  Loai_Xe.init({
    Ten_Loai: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Loai_Xe',
  });
  return Loai_Xe;
};