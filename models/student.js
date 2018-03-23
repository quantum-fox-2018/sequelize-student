'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail(value,next){
          let atPosition = value.indexOf('@')
          let dotPosition = value.indexOf('.')
          if(atPosition>=1 && dotPosition>=atPosition+1 && dotPosition<=value.length-2){
            next()
          } else {
            next('Format email salah')
          }
        },
        isUnique(value,next){
          Student.findOne({raw:true,
            where: {
              email: value
            }
          }).then(student=>{
            if(student==undefined){
              next()
            } else {
              next('Email sudah ada di database')
            }
          }).catch(err=>{
            console.log(err)
          })
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        isValid(value,next){
          if(value<=150){
            next('Tinggi harus lebih dari 150')
          } else {
            next()
          }
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        length(value,next){
          if(value.length<10 || value.length>13){
            next('Nomor telepon harus terdiri dari 10-13 digit')
          } else {
            next()
          }
        },
        isNumberOnly(value,next){
          let count = 0
          let numb = '0123456789'
          for(let i=0; i<value.length; i++){
            for(let j=0; j<numb.length; j++){
              if(value[i]==numb[j]){
                count++
              }
            }
          }
          if(count==value.length){
            next()
          } else {
            next('Nomor telepon tidak boleh mengandung karakter selain angka')
          }
        }
      }
    }
  }, {});

  Student.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
  }

  Student.prototype.getAge = function(){
    let dateNow = new Date().getFullYear()
    return dateNow - this.birthday.getFullYear()
  }

  Student.getFemaleStudent = function(){
    return new Promise(function(resolve, reject) {
      Student.findAll({raw:true,
        where:{
          gender: 'Female'
        }
      }).then(dataStudent=>{
        dataStudent.forEach(student=>{
          student.fullName = `${student.firstName} ${student.lastName}`
        })
        resolve(dataStudent)
      }).catch(err=>{
        reject(err)
      })
    });
  }

  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};
