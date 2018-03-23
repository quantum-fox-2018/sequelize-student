const db = require('./models');
const ControllerStudent = require('./controllers/ControllerStudent');
const ViewStudent = require('./views/ViewStudent');

let input = process.argv;
let option = input[2];

if(option == "add") {
  let first_name = input[3];
  let last_name = input[4];
  let gender = input[5];
  let birthdayRaw = input[6];
  let email = input[7];
  let phone = input[8];
  let height = input[9];
  let arrBirthday = birthdayRaw.split('-');
  let birthday = new Date(arrBirthday[2], arrBirthday[1]-1, arrBirthday[0]);
  console.log(birthday);
  ControllerStudent.add({
    first_name: first_name,
    last_name: last_name,
    gender: gender,
    birthday: birthday,
    email: email,
    phone: phone,
    height: height
  }, ViewStudent.add);
} else if(option == "read_one") {
  let id = input[3];
  ControllerStudent.findOne(id, ViewStudent.list);
} else if(option == "read_all") {
  ControllerStudent.list(ViewStudent.list);
} else if(option == "update") {
  let id = input[3];
  let column = input[4];
  let value = input[5];
  ControllerStudent.update(id, column, value, ViewStudent.update);
} else if(option == "erase") {
  let id = input[3];
  ControllerStudent.delete(id, ViewStudent.delete);
} else if(option == "female") {
  ControllerStudent.findFemale(ViewStudent.list);
}
