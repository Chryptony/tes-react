'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class API extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  API.init({
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    subject: DataTypes.STRING,
    age: DataTypes.STRING,
    action: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'API',
  });
  return API;
};