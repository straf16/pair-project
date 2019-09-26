'use strict';
const convert = require('../helpers/bcryptPassword')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Viewer extends Model {}
  Viewer.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'alamat email tidak valid'
        },
        isUse: function(value) {
          return Viewer.findOne({
            where: {email: value}
          })
          .then(data => {
            if (data) {
              throw new Error('Email telah digunakan!')
            }
          })
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Viewer',
    hooks: {
      beforeCreate(instance, options) {
        console.log(instance.password)
        const hashPassword = convert(instance.password)
        console.log(hashPassword)
        instance.setDataValue('password', hashPassword)
      }
    }
  });
  Viewer.associate = function(models) {
    // associations can be defined here
    Viewer.belongsToMany(models.Cinema, { through: models.CinemaViewer })
  };
  return Viewer;
};