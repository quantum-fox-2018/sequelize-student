'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birtday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
    validate:{
      isEmail: {
        args: true,
        msg : `invalid email`
      }
    }},
    phone: {
      type: DataTypes.STRING,
      validate:{
        not: {
          args:[["a-z"],'i'],
          msg: `invalid phone number`
        },
        len: {
          args:[10,13],
          msg: `invalid phone number`
        }
      }
    },
    heigh:{
      type: DataTypes.INTEGER,
      validate:{
        min: {
          args:150,
          msg: `heigh is lower than 150`
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  Student.prototype.getFullName = function() {
    return (`${this.first_name} ${this.last_name}`)
  }
  Student.prototype.getAge = function(){
    let year = String(this.birtday).substr(11,11).substr(0,4);
    let age = new Date().getFullYear() - Number(year)
    console.log(`${this.first_name} ${this.last_name} age : ${age}`)
  }
  Student.getFemaleStudent = function (callback){
    Student.findAll({
      where:{
        gender: "female"
      }
    }).then(studentFemale=>{
        callback(studentFemale)
    }).catch((err)=>{
      console.log(err)
    })
  }
  return Student;
};
