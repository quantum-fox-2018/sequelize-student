'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          arg: true,
          msg: `Please check again your email format`
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          arg: [10, 13],
          msg: `phone length must be 10 -13`
        },
        isAlpha: {
          arg: false,
          msg: `phone not allow letters`
        },
        isAlphanumeric: {
          arg: false,
          msg: `phone not allow alphanumeric`
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        max: {
          arg: 150,
          msg: `height must be greater than 150`
        }
      }
    }
  }, {});
  Student.associate = function (models) {
    // associations can be defined here
  };
  // get full name
  Student.prototype.getFullName = function (first_name, last_name) {
    let full_name = `${first_name} ${last_name}`;
    return full_name;
  }
  // get age
  Student.prototype.getAge = function (birthday) {
    let birthYear = (new Date(birthday)).getFullYear();
    let currentYear = (new Date()).getFullYear();

    return currentYear - birthYear;
  }
  // get female student
  Student.getFemaleStudents = function (callback) {
    Student.findAll({
        where: {
          gender: 'female'
        }
      })
      .then(data_student => {
        callback(data_student, false);
      })
      .catch(err => {
        callback(err.message, true);
      })
  }
  // 

  return Student;
};