'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    fist_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args : true,
          msg:'format bukan email'
        },
        sameEmail: function(emailInput){
          Student.findAll({where : {email : emailInput}})
          .then(function(emailsama){
            if(emailsama.length !== 0){
              console.log('data email sudah pernah ada ')
          }
        })
      }}
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len:[10,13],
        not: ["[a-z]",'i']
      }
    },
    tinggi_badan:{
      type: DataTypes.INTEGER,
      validate: {min:150}
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
    Student.prototype.displayGetFullName = function(){
      return `${this.fist_name} ${this.last_name}`
    }

    Student.prototype.getAge = function(){
      let date = new Date()
      let yearNow = date.getFullYear()
      let age = yearNow - this.birthday.getFullYear()
      return `${this.fist_name} ${this.last_name} berumur ${age}`
    }

    Student.getFemaleStudent = function(cb){
      Student.findAll({
        where : { gender: 'female'}
      })
      .then(femaleStudent => {
        cb(femaleStudent)
      })
      .catch(err => {
        console.log(err)
      })
    }



  };
  return Student;


};
