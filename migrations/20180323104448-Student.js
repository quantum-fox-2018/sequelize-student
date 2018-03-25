'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return [queryInterface.addColumn('Students', 'email',{type:Sequelize.STRING}),
           queryInterface.addColumn('Students', 'tinggi_badan',{type:Sequelize.INTEGER}),
           queryInterface.addColumn('Students', 'phone',{type:Sequelize.STRING})
          ]
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

   return [queryInterface.removeColumn('Students', 'email',{type:Sequelize.STRING}),
           queryInterface.removeColumn('Students', 'tinggi_badan',{type:Sequelize.INTEGER}),
           queryInterface.removeColumn('Students', 'phone',{type:Sequelize.STRING})
          ]
  }
};
