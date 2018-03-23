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
          args: [true],
          msg: 'Input error. Email is not validated'
        },
        isEmailUnique(value,next){
          // console.log(value)
          Student.findOne({where: {email: value}}).then(student => {
            // console.log(student);
            if(student != null && student.email == value) {
              next('Email has been used before !');
            } else {
              next();
            }
          })

          // Student.findAll().then(students => {
          //   students.forEach(student => {
          //     // console.log(student.dataValues)
          //     if(student.email == value) {
          //       // console.log('error')
          //       next('error');
          //     } else {
          //       next();
          //     }
          //   });
          // })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        not: {
          args: ["[a-z]",'i'],
          msg: 'Phone not allow letters'
        },
        isLength(value,next) {
          if (value.length < 10 || value.length > 13) {
            next('Phone length must be 10 - 13')
          } else {
            next()
          }
        },
        isAlphanumeric: {
          args: false,
          msg: 'Phone not allow alphanumeric'
        }
      }
    },
    Height: {
      type: DataTypes.INTEGER,
      validate: {
        min: 150
      } 
    } 
  }, {});
  Student.prototype.getFullName = function() {
    let full_name = this.first_name + ' ' + this.last_name
    return full_name;
  }
  Student.prototype.getAge = function() {
    let birth_year = Number(this.birthday.slice(0,4));
    let current_year = new Date().getFullYear();
    let age = current_year - birth_year;
    return age;
  }
  Student.getFemaleStudent = function() {
    return new Promise (function(resolve,reject) {
      Student.findAll({raw:true}).then(students => {
        let femaleStudent = [];
        students.forEach(student => {
          student.full_name = student.first_name +' ' + student.last_name
          if(student.gender == 'female') {
            femaleStudent.push(student)
          }
        });    
        resolve(femaleStudent)
      })      
    })
  }
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};