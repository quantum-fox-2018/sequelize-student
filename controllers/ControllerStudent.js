const model = require('../models');

class ControllerStudent {
  static list(callback) {
    model.Student.findAll({raw:true})
    .then(data => {
      callback(data);
    })
    .catch(err => {
      console.log(err.message);
    });
  }

  static findOne(id, callback) {
    let student = model.Student.findById(id)
    .then(function(student) {
      callback(student);
    })
    .catch(err => {
      console.log(err.message);
    });
  }

  static findFemale(callback) {
    model.Student.getFemaleStudent()
    .then(function(students) {
      callback(students);
    })
    .catch(err => {
      console.log(err.message);
    });
  }

  static add(obj, callback) {
    let student = model.Student.build({
      first_name: obj.first_name,
      last_name: obj.last_name,
      gender: obj.gender,
      birthday: obj.birthday,
      email: obj.email,
      phone: obj.phone,
      height: obj.height
    })
    student.save()
    .then(() => {
      callback(student);
    })
    .catch(err => {
      console.log(err.message);
    });
  }

  static update(id, column, value, callback) {
    let student = model.Student.findById(id)
    .then(function(student) {
      student.update({
        [column]: value
      })
      .then(function(studentUpdate) {
        callback(studentUpdate);
      })
      .catch(err => {
        console.log(err.message);
      });
    })
    .catch(err => {
      console.log(err.message);
    });
  }

  static delete(id, callback) {
    let student = model.Student.findById(id)
    .then(function(student) {
      student.destroy()
      .then(function() {
        callback(student);
      })
      .catch(err => {
        console.log(err.message);
      });
    })
    .catch(err => {
      console.log(err.message);
    });
  }
}

module.exports = ControllerStudent;
