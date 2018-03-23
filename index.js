'use strict';
const Controller = require('./controller');

const command = process.argv;
const input = {
    command1: command[3],
    command2: command[4],
    command3: command[5],
    command4: command[6],
};

switch(command[2]) {
    case 'getFullName':
    Controller.getFullNameById(input.command1);
    break;
    case 'getAge':
    Controller.getAge(input.command1);
    break;
    case 'getFemaleStudent':
    Controller.getFemaleStudent();
    break;
}