const {Student} = require('./models')

Student.findAll({raw:true}).then(dataStudent=>{
  console.log(dataStudent)
})
