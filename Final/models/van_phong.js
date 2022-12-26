'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Van_Phong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Van_Phong.belongsTo(models.Nha_Xe,{foreignKey : 'NhaXeId'});
    }
  }
  Van_Phong.init({
    van_phong: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Van_Phong',
  });
  return Van_Phong;
};