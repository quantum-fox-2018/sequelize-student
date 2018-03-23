'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [queryInterface.addColumn('Students','height',Sequelize.INTEGER),
            queryInterface.addColumn('Students','phone',Sequelize.STRING)]
  },

  down: (queryInterface, Sequelize) => {
    return [queryInterface.removeColumn('Students','height'),
            queryInterface.removeColumn('Students','phone')]
  }
};
