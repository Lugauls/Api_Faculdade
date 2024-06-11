'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Jogos', [
      {
        nome: 'The Witcher 3: Wild Hunt',
        genero: 'RPG',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'The Legend of Zelda: Breath of the Wild',
        genero: 'Aventura',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Jogos', null, {});
  }
};

