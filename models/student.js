'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  // get full name
  Student.prototype.getFullName = function (first_name, last_name) {
    let full_name = `${first_name} ${last_name}`;
    return full_name;
  }
  // get age
  Student.prototype.getAge = function (birthday) {
    let birthYear = (new Date(birthday)).getFullYear();
    let currentYear = (new Date()).getFullYear();

    return currentYear - birthYear;
  }
  
  return Student;
};