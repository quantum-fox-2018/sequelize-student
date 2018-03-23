const {Student,sequelize} = require('../models/index')

class ControllerStudent {
    static fullName (){
        Student.findAll()
        .then(row => {
            row.forEach(newData => {
                console.log(newData.getFullName())
            })
            process.exit()
        })
    }

    static getAge (){
        Student.findAll()
        .then(row => {
            row.forEach(newData => {
                console.log(newData.getAge())
            })
            process.exit()
        })
    }

    static getFemaleStudent(){
        Student.getFemale()
        .then(data => {
            data.forEach(newData => {
                console.log(newData.id)
                console.log(newData.first_name)
                console.log(newData.last_name)
                console.log(newData.getFullName())
            })
            process.exit()
        })
        .catch(err => {
            console.log(err)
        })
    }

    static add(fname,lname,gender,birth,email,phone,height){
        Student.create({
            first_name: fname,
            last_name: lname,
            gender: gender,
            birthday: birth,
            email: email,
            phone: phone,
            createdAt: new Date(),
            updatedAt: new Date(),
            height: height
        })
        .then(row => {
            console.log(`DATA BERHASIL DIMASUKKAN !`)
            process.exit()
        })
        .catch(err => {
            console.log(err.message)
            process.exit()
        })
    }

    
}

module.exports = ControllerStudent;