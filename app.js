let argv = process.argv;

const ControllerStudent = require('./controller/student')

let table = argv[2];
let action = argv[3];
let value = argv.slice(4);

if(table == 'student'){
    if(action == 'fullname'){
        ControllerStudent.fullName()
    } else if(action == 'getAge'){
        ControllerStudent.getAge()
    } else if(action == 'getFemale'){
        ControllerStudent.getFemaleStudent()
    } else if(action == 'add'){
        ControllerStudent.add(value[0],value[1],value[2],value[3],value[4],value[5],value[6])
    }
}