const db = require('./models')
let argv = process.argv
let command = argv[2]

// db.Student.getAge();
db.Student.getFemaleStudent(function(students) {
  students.forEach(function(students) {
    console.log(students.id);
    let studentsFull = students.getFullName();
    console.log(studentsFull);
  })
})

db.Student.addStudent(function(newStudent) {
  console.log(newStudent);
})
