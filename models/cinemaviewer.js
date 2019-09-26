'use strict';
const generateCode = require('../helpers/generateCode')

module.exports = (sequelize, DataTypes) => {
  const classModel = sequelize.models
  const Model = sequelize.Sequelize.Model
  class CinemaViewer extends Model {}
  CinemaViewer.init({
    CinemaId: DataTypes.INTEGER,
    ViewerId: DataTypes.INTEGER,
    bookingCode: DataTypes.STRING,
    totalSeat: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CinemaViewer',
    hooks: {
      beforeCreate (instance, options) {
        return classModel.Cinema
          .findOne({
            where: {id: instance.CinemaId}
          })
          .then(cinema => {
            instance.setDataValue('bookingCode', generateCode(cinema.code))
            instance.setDataValue('totalPrice', instance.totalSeat * cinema.price)
          })
      }
    }
  });
  CinemaViewer.associate = function(models) {
    // associations can be defined here
  };
  return CinemaViewer;
};