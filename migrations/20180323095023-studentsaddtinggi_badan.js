'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('Students', 'height', {type: Sequelize.INTEGER}),
      queryInterface.addColumn('Students', 'email', {type: Sequelize.STRING}),
      queryInterface.addColumn('Students', 'phone', {type: Sequelize.STRING})
    ]
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('Students', 'height'),
      queryInterface.removeColumn('Students', 'email'),
      queryInterface.removeColumn('Students', 'phone')
    ];
  }
};