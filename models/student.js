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
        isEmail: true,
        isUnique(emailAddress){
          Student.findAll({})
          .then(function(students){
            students.forEach(student => {
              if(students.email == emailAddress){
                throw new Error('Can only add new student with new email');
              }
            });
          })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: false,
        isNumeric: true,
        isLength(phone_num){
          if(phone_num < 10 || phone_num > 13){
            throw new Error('phone length must be 10 - 13');
          }
        }
      },
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        isHigher(value){
          if(value < 150){
            throw new Error('Can only add students with 150 cm height and above')
          }
        }
      }
    }
  }, {});
  
  Student.associate = function(models) {
    // associations can be defined here
  };

  //Class Method!
  Student.getFemaleStudent = function(cb){
    Student.findAll({where: {gender: 'female'}})
    .then(function(femaleStudent){
      femaleStudent.forEach(female_student => {
        female_student.full_name = female_student.first_name + ' ' + female_student.last_name;  
      });
      
      cb(femaleStudent);
    })
  }

  //Instance method!
  Student.prototype.getFullName = function(){
    return this.first_name + ' ' + this.last_name;
  }

  Student.prototype.getAge = function(){
    let year =  this.birthday.getFullYear();
    let todayYear = new Date().getFullYear();
    return todayYear - year;
  }
  return Student;
};