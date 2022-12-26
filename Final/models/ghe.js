'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ghe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ghe.belongsTo(models.Xe,{foreignKey:'XeId'});
      Ghe.belongsTo(models.Loai_Ghe,{foreignKey:'LoaiGheId'});
      Ghe.hasOne(models.CT_Dat_Cho,{foreignKey:'GheId'});
    }
  }
  Ghe.init({
  }, {
    sequelize,
    modelName: 'Ghe',
  });
  return Ghe;
};