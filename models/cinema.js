'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Cinema extends Model {}
  Cinema.init({
    name: DataTypes.STRING,
    film: DataTypes.STRING,
    synopsis: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    schedule: DataTypes.STRING,
    price: DataTypes.INTEGER,
    code: DataTypes.STRING,
    linkIMG: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cinema'
  });
  Cinema.associate = function(models) {
    // associations can be defined here
    Cinema.belongsToMany(models.Viewer, { through: models.CinemaViewer })
  };
  return Cinema;
};