const Controller = require('./controllers')
const argv = process.argv

function command(command,inputData){
  if(command==='name'){
    Controller.showName()
  }
  else if(command==='age'){
    Controller.showAge()
  }

  else if(command==='female'){
    Controller.showFemale()
  }

  else if(command==='add'){
    Controller.addData(inputData)
  }

var email = 'eki@gmail.com'
console.log(email.substring(email.indexOf('@')+1,email.indexOf('.')));

}

command(argv[2],argv.slice(3))
