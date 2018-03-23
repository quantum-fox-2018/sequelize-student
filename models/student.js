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
        isEmail: {
          args: true,
          msg:'Format bukan email'
        },
        isEmailAvailable: function(value){
          Student.findAll({where:{email:value}})
          .then(Results =>{
            if(Results.length != 0){
              throw new Error('Email Sudah di pakai');
            }
          })
          .catch( err =>{
              console.log('Email Sudah di pakai');
          })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate:{
        len: {
          args: [10,13],
          msg: 'Phone length must be 10 - 13'
        },
        isAlpha: {
          args: false,
          msg: 'Phone not allow letters'
        },
        isAlphanumeric: {
          args: false,
          msg: 'Phone not allow alphanumeric'
        }

      }
    },
    height:{
      type: DataTypes.INTEGER,
      validate:{
        min: {
          args:150,
          msg:'Tinggi badan minimal 150'
        }
      }
    }

  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  //Instance Method
  Student.prototype.getFullName = function() {
    // return 'text aja'
    return `${this.first_name} ${this.last_name}`;
  }

  //Instance Method
  Student.prototype.getAge = function() {
    let studentBornYear = this.birthday.getFullYear();
    let currentYear = new Date();
    let studentAge = currentYear.getFullYear() - studentBornYear;
    let fullname = this.getFullName();
    // console.log(studentAge);
    return `Student "${fullname}" Age is: ${studentAge}`;
  }

  //class Method
  Student.getFemaleStudent = function(cbResult){
    this.findAll(
      {where:
        {gender:'female'}
      }
    )
    .then(result =>{
      cbResult(result)
    })
    .catch(err =>{
      cbResult(err);
    })
  }
  return Student;
};
