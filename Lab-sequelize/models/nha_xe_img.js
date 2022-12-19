'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nha_Xe_IMG extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Nha_Xe_IMG.belongsTo(models.Nha_Xe,{foreignKey:'NhaXeId'});
    }
  }
  Nha_Xe_IMG.init({
    imgPath: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Nha_Xe_IMG',
  });
  return Nha_Xe_IMG;
};