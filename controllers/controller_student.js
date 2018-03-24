const {Student} = require('../models')
const View = require('../views/view_student')

class StudentControl {
    constructor() {
        
    }

    static showList(){
        Student.findAll()
        .then(listStudent => {
            listStudent.forEach(dataStudent => {
                View.showList(dataStudent.dataValues)
                // process.exit()
            });
        })
        .catch(err => {
            if(err) throw err
        })
    }

    static addStudent(option){
        Student.create({
            first_name: option[0],
            last_name: option[1],
            gender: option[2],
            birthday: option[3],
            email: option[4],
            phone: option[5],
            height: option[6]
        })
        .then(studentData => {
            console.log('===ADD New Student SUCESS===')
            View.showList(studentData.get({
                plain: true
            }))
            // View.showList(studentData.dataValues)
            process.exit()
        })
        .catch(err =>{
            if(err) throw err
        })
    }

    static showName(){
        Student.findAll()
        .then(listStudent => {
            console.log('This Full Name Students :')
            listStudent.forEach(dataStudent => {
                // console.log(dataStudent)
                View.showName(dataStudent.getFullName())
            });
        })
        .catch(err => {
            if(err) throw err
        })
    }

    static showAge(){
        Student.findAll()
        .then(listStudent => {
            listStudent.forEach(dataStudent => {
                View.showAge(dataStudent.getAge())
                // console.log(dataStudent.getAge())
            })
        })
        .catch(err => {
            if(err) throw err
        })
    }

    static showFemale(){
        Student.getFemaleStudent()
        .then(dataFemale => {
            dataFemale.forEach(data => {
                View.showFemale(data.dataValues)
            });
        })
    }

}

// StudentControl.showFemale()

module.exports = StudentControl