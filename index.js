const models = require('./models');

models.Student.findAll()
.then(student => {
  for (var i = 0; i < student.length; i++) {
    console.log(student[i].getFullName());
  }
  // (student.getFullName());
})

models.Student.findById(1)
.then(student => {
  console.log(student.getAge());
})

models.Student.getFemaleStudent({raw:true})
.then(femaleStudents => {
  // console.log(femaleStudents);
  for (var i = 0; i < femaleStudents.length; i++) {
    console.log(femaleStudents[i].first_name + ' ' + femaleStudents[i].last_name);
  }
})
