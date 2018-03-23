const {Student} = require('./models')

let student = {
  firstName: 'Joko',
  lastName: 'Susanto',
  gender: 'Male',
  birthday: new Date('1993-05-31'),
  email: 'joko@jakass.com',
  createdAt: new Date(),
  updatedAt: new Date(),
  height: 170,
  phone: '11111111111r'
}

Student.create(student).then(student=>{
}).catch(err=>{
  console.log(err)
})
