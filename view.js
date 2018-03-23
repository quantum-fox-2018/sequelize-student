'use strict';
const Controller = require('./controller');

class View {
    static printData(data) {
        console.log(data);
    }

    static printErrorMessage(statusMessage) {
        console.log(statusMessage);
    }
}

module.exports = View;