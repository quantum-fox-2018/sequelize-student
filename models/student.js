'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    height: DataTypes.INTEGER
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = function() {
    let full_name = this.first_name + " " + this.last_name;
    return full_name;
  }

  Student.prototype.getAge = function() {
    let year = this.birthday.getFullYear()
    let age = 2018 - year;
    return age;
  }

  Student.getFemaleStudent = function (callback) {
    Student.findAll({
      where: {gender: 'female'}
    })
    .then(students => {
       callback(students)
    })
  }

  Student.addStudent = function (first_name, last_name, gender, email, phone, height, callback) {
    Student.create({
      first_name: first_name,
      last_name: last_name,
      gender: gender,
      email: email,
      phone: phone,
      height: height
    })
    .then(newStudent => {
      callback(newStudent);
    })
  }

  Student.updateStudent = function(id, column, value, callback) {
    Student.update({
      [column]: value
    }, {
      where: {id: id}
    })
    .then(updated => {
      callback(updated);
    })
  }

  Student.deleteContact = function(id, callback) {
    Model.Contact.destroy({
      where: {id: id}
    })
    .then(deleted => {
      callback(deleted);
    })
  }

  return Student;
}
