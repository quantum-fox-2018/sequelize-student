const model = require('./models');

// model.Student.findOne({where:{id:1}})
//   .then(student => {
//     console.log('---------------\n', student.displayGetFullName())
//     process.exit()
//   })

// model.Student.findOne({where:{id:1}})
//   .then(student => {
//     console.log('---------------\n', student.getAge())
//     process.exit()
//   })

// let femaleStudents = model.Student.getFemaleStudent(function(female_students){
//   female_students.forEach(function(female_student){
//     console.log(female_student.id)
//     console.log(female_student.fist_name)
//     console.log(female_student.last_name)
//     console.log(female_student.displayGetFullName())
//   })
//   process.exit()
// })

model.Student.create({
  fist_name: 'yasir',
  email: 'dodol@dodol.com',
  phone: '798798797',
  tinggi_badan: 170
})
.then(value => {
  console.log(value)
})
.catch(err => {
  console.log(err.message)
})
