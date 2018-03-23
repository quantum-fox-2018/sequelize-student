'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        isEmail: {
          args: true,
          msg: "email salah"
        },
        isUniqueEmail: function(object){
          Student.findOne({where: {email:object.email}}).then(data=>{
            if(data !== null){
              throw new Error("email sudah terdaftar");
            }
          })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10,13],
          msg: "nomor hp salah kependekan atau kepanjangan"
        },
        isAlphanumeric: {
          args: false,
          msg: "not allow alphanumeric"
        },
        not: {
          args: ["[a-z]",'i'],
          msg: "harus angka"
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate:{
        min: {
          args: 150,
          msg: "Minimum height 150"
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here

    }

  Student.prototype.getFullName = function (first_name,last_name) {
    let full_name = first_name + ' ' +last_name;
    return full_name
  };

  Student.prototype.getAge = function (birthDate) {

    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  return age;
  }

  Student.getGenderStudent = function (gender){
    return Student.findAll({where: {gender: gender}});
  }

  return Student;
}
