const db = require('./models');

// GET FULL NAME
// db.Student.findOne({
//   where: {id: 2}
// })
// .then(student => {
//   console.log(student.getFullName());
// })

// db.Student.findAll()
// .then(students => {
//   students.forEach(students => {
//     console.log(students.getFullName());
//   })
// });

//GET AGE
// db.Student.findOne({
//   where: {id: 3}
// })
// .then(student => {
//   console.log(student.getAge());
// })

// db.Student.findAll()
// .then(students => {
//   students.forEach(students => {
//     console.log(students.getAge());
//   })
// })

//GET FEMALE STUDENT
// db.Student.getFemaleStudent(students => {
//   students.forEach(student => {
//     console.log(student.id);
//     console.log(student.first_name);
//     console.log(student.last_name);
//     console.log(student.full_name);
//   })
// })

//VALIDATION EMAIL
// db.Student.findOne({
//   where: {id: 5}
// })
// .then(student => {
//   student.updateAttributes({
//     email: 'sally2gmail.co.id'
//   })
//   .then(result => {
//     console.log(result.dataValues);
//   })
//   .catch(error => {
//     console.log(error.message);
//   })
// })

//VALIDATION PHONE
// db.Student.findOne({
//   where: {id: 2}
// })
// .then(student => {
//   student.updateAttributes({
//     height: 170
//   })
//   .then(result => {
//     console.log(result.dataValues);
//   })
//   .catch(error => {
//     console.log(error.message);
//   })
// })

// VALIDATION PHONE
// db.Student.findOne({
//   where: {id: 2}
// })
// .then(student => {
//   student.updateAttributes({
//     phone: '1234567890'
//   })
//   .then(result => {
//     console.log(result.dataValues);
//   })
//   .catch(error => {
//     console.log(error.message);
//   })
// })
