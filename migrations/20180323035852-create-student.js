'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.DATE
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: {
            args:true,
            msg: 'Masukkan email yang benar'
        }
      },
      phone: {
        type: Sequelize.STRING
        validate: {
          len: {
            args: [10, 13],
            msg: 'Phone length must be 10 -13'
          },
          isAlpha: {
            args: false;
            msg: 'Phone number not allow letters'
          },
          isAlphaNumeric: {
            args: false;
            msg: 'Phone not allow alphanumeric'
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      height: {
        type: Sequelize.INTEGER
        max: {
          args: > 150,
          msg: 'tinggi harus diatas 150 cm'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Students');
  }
};
