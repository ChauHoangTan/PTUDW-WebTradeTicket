'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CT_Dat_Cho extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CT_Dat_Cho.belongsTo(models.Dat_Cho,{foreignKey: 'VeId'});
      CT_Dat_Cho.belongsTo(models.Ghe,{foreignKey:'GheId'});
      CT_Dat_Cho.belongsTo(models.ChuyenXe,{foreignKey:'ChuyenXeId'});
    }
  }
  CT_Dat_Cho.init({
    Gia: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'CT_Dat_Cho',
  });
  return CT_Dat_Cho;
};