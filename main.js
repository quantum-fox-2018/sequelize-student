const model = require('./models');


// model.Student.findAll()
  // .then(Student=>{
  //   console.log('---------Full Name----------');
  //   for(let i = 0; i < Student.length; i++){
  //     console.log(Student[i].getFullname());
  //   }
  //   process.exit();
  // })

  // .then(Student=>{
  //   console.log('-------------Age--------------');
  //   for(let i = 0; i < Student.length; i++){
  //     console.log(Student[i].getAge());
  //   }
  //   process.exit();
  // })

  model.Student.getFemaleStudent()
    .then(femaleStudent=>{
      console.log(femaleStudent);
      process.exit();
    })

  // model.Student.create({
  //   first_name: 'john',
  //   last_name: 'doe',
  //   email: 'john'
  // })
  // .then(Student=>{
  //   console.log(Student);
  // })
