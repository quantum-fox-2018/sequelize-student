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
  // Student.prototype.getFullName = function() {
  //   return new Promise(function(resolve, reject){
  //     setTimeout(()=>{
  //       resolve('halooo siapa dia')
  //     }, 0)
  //   })
  // }
  Student.prototype.percobaan = function(){
    return new Promise(function (resolve, reject) {
      resolve('dapeeeeeeettt')
    })
  }
  Student.prototype.getAge = function() {
    let birth_year = Number(this.birthday.slice(0,4));
    let current_year = new Date().getFullYear();
    let age = current_year - birth_year;
    return age;
  }
  Student.getFemaleStudent = function() {
    Student.findAll({raw:true}).then(students => {
      let femaleStudent = [];
      students.forEach(student => {
        student.full_name = student.first_name +' ' + student.last_name
        if(student.gender == 'female') {
          femaleStudent.push(student)
        }
      });    
      return femaleStudent
      process.exit()
    })
  }
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};