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
        isEmail: {
          args: true,
          msg: `wrong email format!`
        }
      }
    },
    phone: DataTypes.STRING
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.prototype.getFullname = function(){
    let fullName = `${this.first_name} ${this.last_name}`;
    return fullName;
  }

  Student.prototype.getAge = function(){
    let year = this.birthday.getFullYear();
    let age = 2018 - year;
    return age;
  }

  Student.prototype.getFemaleStudent = function(){
    if(this.gender === 'female'){
      let femaleStudent = {
                            first_name  : this.first_name,
                            last_name   : this.last_name,
                            birthday    : this.birthday,
                          }
      return femaleStudent
    }
  }

  Student.getFemaleStudent = function(){

    return new Promise(function (resolve, reject){
      Student.findAll({
        where: {
          gender: 'female'
        }
      }).then(femaleStudent => {
        resolve(femaleStudent)
      })
    })
  }


  return Student;
};
