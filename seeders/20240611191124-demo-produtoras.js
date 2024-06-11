'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Produtoras', [
      {
        nome: 'Nintendo',
        sede: 'Quioto, Japão',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'CD Projekt Red',
        sede: 'Varsóvia, Polônia',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Produtoras', null, {});
  }
};
