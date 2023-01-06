'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Khach_Hang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Khach_Hang.hasMany(models.Dat_Cho,{foreignKey:'KhachHangId'});
      Khach_Hang.hasMany(models.Danh_Gia,{foreignKey:'KhachHangId'});
    }
  }
  Khach_Hang.init({
    Ho_Ten: DataTypes.STRING,
    SDT: DataTypes.STRING,
    Nam_sinh: DataTypes.INTEGER,
    email: DataTypes.STRING,
    Gioi_Tinh: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Khach_Hang',
  });
  return Khach_Hang;
};