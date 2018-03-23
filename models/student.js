'use strict';

module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: `Invalid email`
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        not: {
          args: ["[a-z]", 'i'],
          msg: `Invalid phone number`
        },
        len: {
          args: [10, 13],
          mas: `Invalid phone number`
        }
      }
    },
    heigh: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: `Heigh should be above 150`
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  //instance method
  Student.prototype.getFullName = function() {
    return (`${this.first_name} ${this.last_name}`);
  };

  //instance method
  Student.prototype.getAge = function() {
    let yearBirthday = this.birthday.substr(0, 4);
    let date = new Date;
    let yearNow = date.getFullYear();
    let age = yearNow - yearBirthday;
    return (`${this.first_name} ${this.last_name}, age = ${age}`);
  };

  //class method
  Student.getFemaleStudent = function(cb) {
    Student.findAll({
      where: {
        gender: 'female'
      }
    }).then(student => {
      cb(student);
    }).catch((err) => {
      console.log(err);
    });
  }

  return Student;
};
