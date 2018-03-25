'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail:{args:true,msg:'Email tidak valid'},
        isEmailAvailabe(emailInput){
          Student.findAll({
            where: {
              email:emailInput
            }
          }).then(function(data){
            if(data.length != 0) {
              throw new Error('Email sudah dipakai')
            }
          })
        }
      }
    },
    phone: {
      type:DataTypes.STRING,
      validate:{
        len:{
          args:[10,13],
          msg:'Phone length must be 10-13'
        },isNumeric:{
          args:true,
          msg:'Phone not allow letters'
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate:{
        min:{
          args:150,
          msg:'Tinggi minimal 150'
        }
      }
    }
  }, {});

  Student.prototype.getFullName = function () { //ke model student
    return this.first_name + ' ' + this.last_name
  }

  Student.prototype.getAge = function () {
    let birthday = this.birthday.getFullYear()
    let now = new Date().getFullYear()

    let age = now - birthday

    return age
  }

  Student.getFemaleStudent = function () {
    return new Promise(function(resolve, reject) {
      Student.findAll({
        where: {
          gender: 'female'
        }
      }).then(femaleStudents => {
        resolve(femaleStudents)
      })
    });
  };

  // Student.associate = function(models) {
  //   // associations can be defined here
  //
  // };
  return Student;
};
