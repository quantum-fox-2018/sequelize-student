'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  
  Student.associate = function(models) {
    // associations can be defined here
  };
  
  // instance method
  Student.prototype.getFullName = function() {
    return `${this.first_name} ${this.last_name}`;
  }

  // instance method
  Student.prototype.getAge = function() {
    let currentYear = new Date().getFullYear();
    let birth = this.birthday.split('-')[0]

    return `${this.first_name} ${this.last_name} (${currentYear - birth} Thn)`
  }
  
  // class method
  Student.getFemale = function(){
    return new Promise((resolve, reject)=>{
      Student.findAll({
        where: {
          gender: 'male'
        }
      })
      .then(row => {
        resolve(row)
      })
      .catch(err => {
        reject(err)
      })
    })
  }

  return Student;
};