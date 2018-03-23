/*jshint esversion:6*/

const models = require('./models');
const argv = process.argv;

//add data student
if (argv[2] == 'add') {
  models.Student.create({
      first_name: argv[3],
      last_name: argv[4],
      gender: argv[5],
      birthday: argv[6],
      email: argv[7],
      phone: argv[8],
      createdAt: new Date(),
      updatedAt: new Date(),
      heigh: argv[9]
    }).then(() => models.Student.findAll({
      raw: true
    }))
    .then(row => {
      console.log(row);
    })
    .catch(err => {
      console.log(err);
    });
}


//getFullName
models.Student.findAll().then(data => {
  console.log('');
  console.log(`List Fullname Student-=-=-=`);
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].getFullName());
  }
  console.log('');
});

//getAge
models.Student.findAll().then(data => {
  console.log(`List Age Student-=-=-=`);
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].getAge());
  }
  console.log('');
});

models.Student.getFemaleStudent(function(student) {
  student.forEach(function(Student) {
    console.log(Student.id);
    console.log(Student.first_name);
    console.log(Student.last_name);
    console.log(Student.getFullName());
  });
  process.exit();
});
