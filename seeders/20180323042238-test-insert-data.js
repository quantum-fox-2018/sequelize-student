'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [{
      first_name: 'Nikolas',
      last_name: 'Friesen',
      gender: 'female',
      birthday: '1998-12-24',
      email: 'agustina_braun@wintheiser.info',
      phone: '449.897.7415',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
