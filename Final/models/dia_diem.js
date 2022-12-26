'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dia_Diem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dia_Diem.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dia_Diem',
  });
  return Dia_Diem;
};