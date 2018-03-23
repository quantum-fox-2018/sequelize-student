const models = require('./models')

// models.Student.findAll().then(data =>{

//     // for (let i = 0; i < data.length; i++) {
        
//     //     console.log(data[i].getFullName());
//     // }

//     process.exit()
// })

// models.Student.findAll().then(data => {

//     for (let i = 0; i < data.length; i++) {
        
//         console.log(data[i].getAge());
//     }

//     process.exit()
// })

// models.Student.getFemaleStudent({raw:true}).then(femaleStudent => {
//     console.log(femaleStudent);
    
//     process.exit()
// })

//Benar
// models.Student.create({
//     first_name:'Diego',
//     last_name:'Maradona',
//     gender:'male',
//     birthday:'1996-07-21',
//     email:'dieog@gmail.com',
//     phone:'987-231-2223',
//     tinggi_badan:167
// }).then(function(newStudent) {

//     console.log(newStudent);
//     process.exit
// })
//salah
models.Student.create({
    first_name:'Pablo',
    last_name:'Maradona',
    gender:'male',
    birthday:'1996-07-21',
    email:'dieoggmail.com',
    phone:'987-231-2223',
    tinggi_badan:141
}).then(function(newStudent) {

    console.log(newStudent);
    process.exit
})