'use strict';
const fs = require('fs')

var students = fs.readFileSync('./students.csv','utf8').split('\n')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let arrayOfStudent = []
    for(let i=0; i<students.length-1; i++){
      let student = students[i].split(',')
      let obj = {
        firstName: student[0],
        lastName: student[1],
        gender: student[2],
        birthday: new Date(student[3]),
        email: student[4],
        createdAt: new Date(),
        updatedAt: new Date()
      }
      arrayOfStudent.push(obj)
    }
    return queryInterface.bulkInsert('Students',arrayOfStudent,{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students',null,{});
  }
};
