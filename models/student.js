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
      //   contains: {
      //     args: '@',
      //     msg: 'Email harus mengandung "@"'
      //   },
      //   isValid() {
      //   if (this.email.substring(0,this.email.indexOf('@')).length===0) {
      //     throw new Error('Harus ada karakter sebelum "@"')
      //     // we also are in the model's context here, so this.otherField
      //     // would get the value of otherField if it existed
      //   }
      // },
      //
      // isOke(){
      //   if(this.email.substring(this.email.indexOf('@')+1,this.email.indexOf('.')).length===0){
      //     throw new Error('Harus ada karakter setelah @ dan sebelum "." ')
      //   }
      // }
      isEmail: {
        args : true,
        msg : 'Email invalid'
      },
      isUnique(email,next){
        Student.findOne({
          where : {
            email : email
          }
        }).then(row=>{
          if(row===null){
            next()
          }
          else{
            next('Email already used, please use another email')
          }
        }).catch(err=>{
          console.log(err);
        })
      }

      }
    },
    phone: {
        type : DataTypes.STRING,
        validate : {
          isNumeric : {
            args : true,
            msg : 'Phone number only allow number'
          },
          len: {
            args : [10,13],
            msg : 'Phone number length must be 10-13'
          }
        }
    },
    height : {
      type : DataTypes.INTEGER,
      validate : {
        min : {
          args : 151,
          msg : 'Height must be more than 150 cm'
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  Student.prototype.getFullName = function () {
    return this.first_name+' '+this.last_name
  }

  Student.prototype.getAge = function () {
    return new Date().getFullYear()-this.birthday.substring(0,4)+' YO'
  }

  Student.getFemaleStudent = function () {
    return new Promise((resolve,reject)=>{
      Student.findAll(
        {
          raw : true,
          where : {
            gender : 'female'
          }
        }
      ).then(row=>{
        resolve(row)
      }).catch(err=>{
        reject(err)
      })
    })
  };

  return Student;
};
