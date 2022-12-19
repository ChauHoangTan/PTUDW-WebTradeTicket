'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Xe_IMG extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Xe_IMG.belongsTo(models.Xe,{foreignKey:'XeId'});
    }
  }
  Xe_IMG.init({
    imgPath: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Xe_IMG',
  });
  return Xe_IMG;
};