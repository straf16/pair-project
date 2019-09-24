'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const cinemaList = [
      {
        name: 'Studio-1',
        capacity: 9,
        film: 'Thor: Ragnarok',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Studio-2',
        capacity: 9,
        film: 'Iron Man 3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Studio-3',
        capacity: 9,
        film: 'Doraemon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Studio-4',
        capacity: 9,
        film: 'Superman',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    return queryInterface.bulkInsert('Cinemas', cinemaList)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Cinemas', null, {});
  }
};
