'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: false,
          msg: 'Invalid email addresss!'
        },
        isUniqueEmail: function(email) {
          Student.findAll({
            where: {email: value}
          })
          .then(students => {
            if(students.length < 0) {
              throw new Error('Email is already used!')
            }
          })
          .catch(error => {
            throw new Error('Invalid email address!')
          })
        }
      }
    },
    phone: DataTypes.STRING,
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: 'Minimum height is 150!'
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = function() {
    return `${this.first_name} ${this.last_name}`;
  };

  Student.prototype.getAge = function() {
    let now = new Date().getFullYear();
    let birthday = this.birthday.getFullYear();
    return `Nama: ${this.getFullName()}, Age: ${now - birthday}`;
  };

  Student.getFemaleStudent = function(callback) {
    this.findAll({
      where: {gender: 'female'}
    })
    .then(femStudents => {
      femStudents.forEach(femStudent => {
        femStudent.full_name = `${femStudent.first_name} ${femStudent.last_name}`;
      })
      callback(femStudents);
    })
  }

  return Student;
};
