'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Cinema extends Model {}
  Cinema.init({
    name: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    film: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cinema'
  });
  Cinema.associate = function(models) {
    // associations can be defined here
  };
  return Cinema;
};