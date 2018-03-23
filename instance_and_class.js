const {Student} = require('./models')

// mendapatkan full name
// Student.findAll().then(dataStudent=>{
//   dataStudent.forEach(data=>{
//     console.log(data.getFullName())
//   })
// })

// mendapatkan umur
// Student.findAll().then(dataStudent=>{
//   dataStudent.forEach(data=>{
//     console.log(data.getAge())
//   })
// })

// mendapatkan female student + fullName
Student.getFemaleStudent()
.then(dataStudent=>{
  dataStudent.forEach(student=>{
    console.log(student)
  })
})
.catch(err=>{
  console.log(err)
})
