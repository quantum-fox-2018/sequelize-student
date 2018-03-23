const Model = require('./models/index.js');

// Model.Student.findById(1).then(student =>{
//   let firstName = student.first_name;
//   let lastName = student.last_name
//   console.log("Full Name : ",student.getFullName(firstName,lastName));
// })
//
// Model.Student.findById(1).then(student =>{
//
//   let birthDate = student.birthday;
//   console.log(student.getAge(birthDate));
// })
//
//
// Model.Student.getGenderStudent("female").then((students)=>{
//
//   students.forEach(function(student){
//     let firstName = student.first_name;
//     let lastName = student.last_name;
//     let fullName = student.getFullName(firstName,lastName);
//     console.log(`Full Name : ${fullName}, Gender : ${student.gender}, height: ${student.height}`);
//
//     // var studentId = student.id;
//     // var height = Math.floor(Math.random()*Math.floor(70)) + 130;
//     // var newData = {
//     //   height: height,
//     //   updatedMax: Date.now()
//     // };
//     // student.update(newData, {where: { id: studentId } })
//     // .then(updatedMax => {
//     // })
//   })
// })

let data ={
  first_name: "rama",
  last_name: "rama",
  gender: "male",
  email: "radadie@asgmail.com",
  phone: "08214",
  height: 170
}

Model.Student.create(data).then(check=>{
  console.log(check);
})
.catch(err=>{
  console.log(err.message);
})
