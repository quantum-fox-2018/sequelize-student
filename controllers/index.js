const StudentController = require('./controller_student')

class Controller {
    constructor() {
        
    }

    static checkSyntax(syntax, value){
        // console.log('===========', value)
        if(syntax == 'list'){
            StudentController.showList()
        }
        else if(syntax == 'add'){
            StudentController.addStudent(value)
        }
        else if(syntax == 'fullname'){
            StudentController.showName()
        }
        else if(syntax == 'showage'){
            StudentController.showAge()
        }
        else if(syntax == 'female'){
            StudentController.showFemale()
        }
    }
}

module.exports = Controller