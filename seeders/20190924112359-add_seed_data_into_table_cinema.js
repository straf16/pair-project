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
        film: 'Thor: Ragnarok',
        synopsis: 'Thor (Chris Hemsworth) is imprisoned on the planet Sakaar, and must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela (Cate Blanchett).',
        capacity: 9,
        schedule: '18:00',
        price: 40000,
        code: 'STD1',
        linkIMG: '/img/thor_ragnarok.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Studio-2',
        film: 'Iron Man 3',
        synopsis: 'When Tony Stark\'s world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.',
        capacity: 9,
        schedule: '18:00',
        price: 40000,
        code: 'STD2',
        linkIMG: '/img/iron_man_3.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Studio-3',
        film: 'Doraemon',
        synopsis: 'In the story, Doraemon, Nobita, Shizuka, Gian, and Suneo set out on an adventure in the Caribbean Sea. Nobita is the captain of a ship and fights his enemies on board.',
        capacity: 9,
        schedule: '18:00',
        price: 40000,
        code: 'STD3',
        linkIMG: '/img/doraemon.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Studio-4',
        film: 'Superman',
        synopsis: 'Clark Kent is an alien who as a child was evacuated from his dying world and came to Earth, living as a normal human. But when survivors of his alien home invade Earth, he must reveal himself to the world.',
        capacity: 9,
        schedule: '18:00',
        price: 40000,
        code: 'STD4',
        linkIMG: '/img/superman.jpg',
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
