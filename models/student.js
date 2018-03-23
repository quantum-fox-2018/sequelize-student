'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail: {
          args: true,
          msg: "this is not correct email format"
        }
      },
      unique: {
        args: true,
        msg: "email address already in use"
      }
    }
    },
    phone: {
      type: DataTypes.STRING,
      validate:{
        len: {
          args: [10,13],
          msg: "phone length must be 10 - 13 char"
        },
        isAlpha: {
          args:false,
          msg: "must not be letters"
        },
        isAlphanumeric:{
          args:false,
          msg: "must not be alphanumeric"
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate:{
        min: {
          args: 150,
          msg: "minimum height is 150"

      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = function(){
    let fullName = `${this.firstName} ${this.lastName}`
    return fullName;
  }

  Student.prototype.getAge = function(){
    let year = (new Date()).getFullYear()
    let studentYear = new Date(this.birthday).getFullYear()
    return year - studentYear
  }

  Student.getFemale = function(callback){
    Student.findAll({
      where: {gender:'female'}
    })
    .then(function(data){
      callback(data);
    })
  }

return Student;

};

//model:generate --name Student --attributes firstName:string,lastName:string,gender:string,birthday:dateonly,email:string,phone:string
