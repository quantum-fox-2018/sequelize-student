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
          msg: 'Format Email Invalid'
        },
        isUnique(email, next){
          Student.findOne({
            where: {
              email: email
            }
          })
          .then(listEmail => {
            if(listEmail){
              next('Email has already used')
            }
            else{
              next('')
            }
          })
          .catch(err => {
            console.log(err)
          })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10,13],
          msg: 'Phone length must be 10 - 13'
        },
        not: {
          args: ["[a-z]",'i'],
          msg: 'Phone not allow letters'
        },
        isNumeric: {
          args: true,
          msg: 'Phone not allow AlphaNumeric'
        }
      }
    } ,
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min:  {
          args: 151,
          msg: 'Height Student must be more than 150'
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  Student.prototype.getFullName = function(){
    return this.first_name+' '+this.last_name
  }
  Student.prototype.getAge = function(){
    let year = new Date().getFullYear()
    let born = this.birthday.slice(0,4)
    let age = year - born
    return `${this.first_name} ${this.last_name} age is "${age}"`
  }
  Student.getFemaleStudent = function(){
    return new Promise((resolve, reject) => {
      Student.findAll({
        where: {
          gender: 'female'
        }
      })
      .then(femaleStudent => {
        resolve(femaleStudent)
      })
      .catch(err => {
        reject(err)
      })
    });
  }

  return Student;
};