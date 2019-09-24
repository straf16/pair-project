'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class CinemaViewer extends Model {}
  CinemaViewer.init({
    ticketCode: DataTypes.STRING,
    schedule: DataTypes.STRING,
    CinemaId: DataTypes.INTEGER,
    ViewerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CinemaViewer'
  });
  CinemaViewer.associate = function(models) {
    // associations can be defined here
  };
  return CinemaViewer;
};