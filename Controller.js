const Model = require('./models')
const View = require('./View')
class Controller {

  static acceptCommand(command){
    if (command[2] === "getfullname") {
      Model.Student.findById(command[3])
      .then(function(student){
        let fullName = student.getFullName()
        View.display(fullName)
      })

    }else if(command[2] === "getage"){
      Model.Student.findById(command[3])
      .then(function(student){
          let age = student.getAge()
          View.display(age)
      })

    }else if(command[2] === "getfemale"){
      Model.Student.getFemale(function(data){
        View.display(data)
      })
    }

  }
}

module.exports = Controller
