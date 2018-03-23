const models = require('./models')

////Contoh penggunaan instense method, FULL NAME
// models.Student.findAll()
// .then(students => {
//   students.forEach(student => {
//     console.log(student.getFullName())
//     process.exit()
//   });
// })
// .catch(err => {
//   console.log(err)
// })

////Contoh penggunaan instense method, GET AGE
// models.Student.findAll()
// .then(students => {
//   students.forEach(student => {
//     console.log(student.getAge())
//   });
//   process.exit()
// })
// .catch(err => {
//   console.log(err)
// })

////Contoh penggunaan class method, FULL NAME
// models.Student.getFemaleStudent()
// .then(students => {
//   students.forEach(student => {
//     console.log(student.id)
//     console.log(student.first_name)
//     console.log(student.last_name)
//     console.log(student.full_name)
//   });
//   process.exit()
// })
// .catch(err => {
//   console.log(err)
// })

//PENGGUNAAN VALIDASI
let sasuke = {
  first_name: 'Uchiha',
  last_name: 'Sasuke',
  gender: 'male',
  birthday: new Date('1991-01-01'),
  height: 150,
  email: 'sa.s.uk.e@uchiha.com',
  phone: '12345678901'
}

models.Student.create(sasuke)
.then(student => {
  console.log(`${student.first_name} berhasil diinput!`)
  process.exit()
})
.catch(err => {
  console.log(err.message)
  process.exit()
})