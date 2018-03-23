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
          args:true,
          msg: 'Format email yang anda masukkan salah !'
        },
        emailUnique(value, next){
          Student.findOne({
            where: {
              email: value
            }
          })
          .then(row => {
            if(row == undefined){
              next()
            } else {
              next(`Email sudah terdaftar!`)
            }
          })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        lengthChecker(value,next){
          if(value.length <= 10 || value.length >=13){
            next(`Phone length must be 10-13`)
          }
          next()
        },
        not: {
          args: ["[a-z]",'i'],
          msg: `Phone not allow letters`
        },
        isAlphanumeric: {
          args: true,
          msg: `Phone not allow alphanumeric`
        }
      }
    }, 
    // DataTypes.STRING,
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: `Tidak boleh kurang dari 150cm`
        }
      }
    }
  }, {});
  
  Student.associate = function(models) {
    // associations can be defined here
  };
  
  // instance method fullname
  Student.prototype.getFullName = function() {
    return `${this.first_name} ${this.last_name}`;
  }

  // instance method age
  Student.prototype.getAge = function() {
    let currentYear = new Date().getFullYear();
    let birth = this.birthday.split('-')[0]

    return `${this.first_name} ${this.last_name} (${currentYear - birth} Thn)`
  }
  
  // class method get female student
  Student.getFemale = function(){
    return new Promise((resolve, reject)=>{
      Student.findAll({
        where: {
          gender: 'male'
        }
      })
      .then(row => {
        resolve(row)
      })
      .catch(err => {
        reject(err)
      })
    })
  }  

  return Student;
};