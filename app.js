// const argv = process.argv;
// const argv_data = argv.splice(2);
// console.log(argv_data);

const Model = require('./models');

// Release 2 - Instance method full name
Model.Student.findById(1).then(data => {
    // console.log(data)
    // console.log(data.first_name);
    data.percobaan().then(datanya => {
        console.log(datanya);
        
    })
    
    process.exit();
})

// Model.Student.findAll().then(arrStudents => {
//     arrStudents.forEach(function(student) {
//         console.log(student.getFullName())
//     })
// })

// Release 2 - instance method getage
// Model.Student.findById(1).then(student => {
//     console.log(student.getAge())
//     process.exit()
// })

// Release 2 - Class method
// console.log(Model.Student.getFemaleStudent())