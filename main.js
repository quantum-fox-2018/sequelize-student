const db = require('./models');

db.Student.findOne({where:{id:2}})
.then(student =>{
  console.log('Full Name: ',student.getFullName());
  console.log('=================');
  // console.log(student.first_name);
  // process.exit();
})

db.Student.findOne({where:{id:2}})
.then(student =>{
  console.log(student.getAge());
  console.log('=================');
  // console.log(student.first_name);
  // process.exit();
})

let allFemaleStudents = db.Student.getFemaleStudent((Students) =>{
  Students.forEach((student) =>{
    console.log('Student id: ', student.id);
    console.log('Student First name: ', student.first_name);
    console.log('Student Last name: ',student.last_name);
    console.log('Student Full Name: ', student.getFullName());
    console.log('=================');
  })
})

db.Student.update({
  phone: '449.897.7415'
}, {
  where: {id: 2}
})
.then(Student =>{
  console.log(Student);
})
.catch(err =>{
  console.log(err.message);
})







//
