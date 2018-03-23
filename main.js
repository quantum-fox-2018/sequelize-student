const models = require('./models');
var argv = process.argv
if(argv[2] === 'add'){
models.Student.create({
  first_name: argv[3],
  last_name: argv[4],
  gender: argv[5],
  birtday: argv[6],
  email: argv[7],
  phone: argv[8],
  createdAt: new Date(),
  updatedAt: new Date(),
  heigh: argv[9]
}).then(data=>{
  console.log('berhasil diinput')
})
}
// console.log(new Date().getFullYear())
// models.Student.findAll().then(data=>{
//   for(let i =0; i<data.length;i++){
//     console.log(data[i].getFullName())
//   }
// });
//
// models.Student.findAll().then(data=>{
//   for(let i =0; i<data.length;i++){
//     data[i].getAge()
//   }
// });

// var all = models.Student.getFemaleStudent(function(student){
//   student.forEach(function(Student){
//     console.log(Student.id);
//     console.log(Student.first_name);
//     console.log(Student.last_name);
//     console.log(Student.getFullName());
//   })
// });
