// const argv = process.argv;
// const argv_data = argv.splice(2);
// console.log(argv_data);

const Model = require('./models');

// Release 2 - Instance method full name
// Model.Student.findById(1).then(data => {
//     console.log(data.getFullName())
//     process.exit();
// })

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
// Model.Student.getFemaleStudent().then(result => {
//     console.log(result)
//     process.exit()
// })


// Release 3 - Model Validation
let newStudent = {
    first_name: 'gaara3',
    last_name:'kazekage2',
    gender: 'male',
    birthday: '1995-01-01',
    email: 'kaze5@ex.com',
    phone: 'abc123abc123',
    createdAt: new Date(),
    updatedAt: new Date(),
    Height: 151
}

Model.Student.create(newStudent).then(data => {
    // console.log(data.dataValues);
    console.log(data);
    process.exit();
})

