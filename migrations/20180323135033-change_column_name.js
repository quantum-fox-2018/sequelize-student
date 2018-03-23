'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // return queryInterface.changeColumn('Students', 'heigh', { type: Sequelize.INTEGER });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'Students',
      'heigh'
    );
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
