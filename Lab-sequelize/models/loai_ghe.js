'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loai_Ghe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Loai_Ghe.hasMany(models.Ghe,{foreignKey:'LoaiGheId'});
    }
  }
  Loai_Ghe.init({
    Ten_loai: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Loai_Ghe',
  });
  return Loai_Ghe;
};