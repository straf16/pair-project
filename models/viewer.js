'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Viewer extends Model {}
  Viewer.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Viewer'
  });
  Viewer.associate = function(models) {
    // associations can be defined here
  };
  return Viewer;
};