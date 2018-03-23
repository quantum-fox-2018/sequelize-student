const {Student} = require('../models')
const View = require('../views')

class Controller{
  constructor(){

  }

  static showName(){
    Student.findAll().then(row=>{
      console.log('Student Name List :');
      for (let i = 0; i < row.length; i++) {
        View.printView(row[i].getFullName());
      }
    })
  }

  static showAge(){
    Student.findAll().then(row=>{
      for (let i = 0; i < row.length; i++) {
        View.printView(row[i].getAge())
      }
    })
  }

  static showFemale(){
  Student.getFemaleStudent().then(row=>{
    for (let i = 0; i < row.length; i++) {
      View.printView(row[i])
    }
  })
  }

  static addData(inputData){
    Student.create({
      first_name : inputData[0],
      last_name : inputData[1],
      gender : inputData[2],
      birthday : inputData[3],
      email : inputData[4],
      phone : inputData[5],
      height : inputData[6]
    }).then(row=>{
      View.printView('Input Data Sukses')
    }).catch(err=>{
      console.log(err.message);
    })
  }
}

module.exports = Controller
