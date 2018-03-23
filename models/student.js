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
          args: true,
          msg: 'Wrong email format!'
        },
        isUnique: function(value, next) {
          Student.find({
            where: {email: value},
            attributes: ['id']
          })
          .then(function(error, user) {
            if(error || user)
              return next('Email address already in use!');
            next();
          });
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10, 13],
          msg: 'Phone length must be 10-13'
        },
        not: {
          args: ["[a-z]",'i'],
          msg: 'Phone not allow letters'
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: 'Tinggi minimal 150 cm'
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  // Instance Method
  Student.prototype.getFullName = function() {
    let full_name = `${this.first_name} ${this.last_name}`;
    return full_name;
  };

  Student.prototype.getAge = function() {
    let date = new Date();
    let birthDate = new Date(this.birthday);
    let age = (date.getFullYear() - birthDate.getFullYear());
    return age;
  };

  // class method
  Student.getFemaleStudent = function() {
    return new Promise(function(resolve, reject) {
      Student.findAll({
        where: {
          gender: "female"
        }
      })
      .then(students => {
        students.forEach((student) => {
          student.full_name = student.getFullName();
        });
        resolve(students);
      })
    });
  }
  return Student;
};
