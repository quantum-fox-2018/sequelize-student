'use strict';
const db = require('./models');
const View = require('./view');

class Controller {
    static getFullNameById(id) {
        db.Student.findOne({
                where: {
                    id: id
                }
            })
            .then((data) => {
                View.printData(data.getFullName(data.first_name, data.last_name));
            })
            .catch((err) => {
                View.printErrorMessage(err.message);
            })
    }

    static getAge(id) {
        db.Student.findOne({
                where: {
                    id: id
                }
            })
            .then((data) => {
                View.printData(data.getAge(data.birthday));
            })
            .catch((err) => {
                View.printErrorMessage(err.message);
            })
    }

    static getFemaleStudent() {
        db.Student.getFemaleStudents((data, err) => {
            if (err) {
                View.printErrorMessage(data);
            } else {
                data.forEach(element => {
                    View.printData(element.getFullName(element.first_name, element.last_name));
                });
            }
        });
    }
}

module.exports = Controller;