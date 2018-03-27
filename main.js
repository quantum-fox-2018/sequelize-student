// const Controller = require('./controller');

// const argv = process.argv;

const model = require('./models');

model.Student.findOne({where: {id: 1}})
.then(function(data){
   console.log(data.getFullName());
})
.catch(function(err){
    console.log(err);
})

model.Student.findOne({where: {id: 1}})
.then(function(data){
    console.log(data.getAge());
})

var all = model.Student.getFemaleStudent(function(students){
    students.forEach(student => {
        console.log(student.id);
        console.log(student.first_name);
        console.log(student.last_name);
        console.log(student.full_name);
    });
})

model.Student.findOne({
    where: {id: 10}
})
.then(function(student){
    student.updateAttributes({
        height: 130
    })
})