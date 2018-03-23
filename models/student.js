'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: 'Min 150'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmailTrue(value) {
          let etChar = value.split('').indexOf('@')
          let dotChar = value.split('').indexOf('.')

          if (etChar < 0 || dotChar < 0 || etChar > dotChar[dotChar.length-1] && etChar > 0) {
            throw new Error('Only email formated allowed!')
          }
        },
        isUnique(value, next) {
          sequelize.models.Student.findOne({
            where: {
              email: value
            }
          })
          .then(info => {
            if(info) {
              next('Email is used!')
            } else {
              next('')
            }
          })
          .catch(err => {
            next(err)
          })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10,13],
          msg: 'phone length must be 10 - 13'
        },
        not: {
          args: ["[a-z]",'i'],
          msg: 'Phone not allow letters'
        },
        isAlphanumeric: {
          args: true,
          msg: 'phone not allow alphanumeric'
        }
      }
    }
  }, {});

  //Instance Method
  Student.prototype.getFullName = function(){
    return this.first_name + ' ' + this.last_name
  }

  Student.prototype.getAge = function(){
    let ynow = new Date().getFullYear()
    let ybirth = this.birthday.getFullYear()
    let age = ynow - ybirth
    return age
  }

  //Class Method
  Student.getFemaleStudent = function() {
    return new Promise((resolve, reject) => {
      Student.findAll({
        where: {
          gender: 'female'
        }
      })
      .then(femaleStudents => {
        // console.log(this)
        femaleStudents.forEach(femaleStudent => {
          femaleStudent.full_name = femaleStudent.first_name +' '+femaleStudent.last_name
        });
        resolve(femaleStudents)
      })
      .catch(err => {
        reject(err)
      })
    })
  }

  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};