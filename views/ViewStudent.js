const Table = require('cli-table');
const chalk = require('chalk');

var table = new Table({
    head: ['ID', 'First Name', 'Last Name', 'Gender', 'Birthday', 'Email', 'Phone', 'Height'],
    errorOnNull : false,
    colWidths: [4, 15, 15, 8, 12, 22, 22, 8]
});

class ViewStudent {
  static list(data) {
    if(Array.isArray(data)) {
      for(let i in data) {
        table.push(ViewStudent.arrayAttributes(data[i]));
      }
    } else {
      table.push(ViewStudent.arrayAttributes(data));
    }
    console.log(chalk.green(table.toString()));
    process.exit();
  }

  static arrayAttributes(obj)  {
    let birthday1 = obj.birthday.getDate() + "-" + (obj.birthday.getMonth()+1) + "-" + obj.birthday.getFullYear();
    return [obj.id, obj.first_name, obj.last_name, obj.gender, birthday1, obj.email, obj.phone, obj.height];
  }

  static add(data) {
    console.log(`Data ${data.first_name} berhasil ditambahkan`);
    process.exit();
  }

  static delete(data) {
    console.log(`Data ${data.first_name} berhasil di hapus`);
    process.exit();
  }

  static update(data) {
    console.log(`Data ${data.first_name} berhasil di update`);
    process.exit();
  }
}

module.exports = ViewStudent;
