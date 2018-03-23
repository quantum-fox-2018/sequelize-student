'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let arrOfObject = [
      {
        first_name:'Eky',
        last_name:'Priyadi',
        gender:'male',
        birthday:'1980-12-24',
        email:'eky@gmail.com',
        phone:'0123456789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name:'Wulan',
        last_name:'Nuraeni',
        gender:'female',
        birthday:'1990-12-24',
        email:'wulan@gmail.com',
        phone:'021456789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name:'Citra',
        last_name:'Skolastika',
        gender:'female',
        birthday:'1992-12-24',
        email:'citra@gmail.com',
        phone:'0123456789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name:'Yohanes',
        last_name:'Sahrul',
        gender:'male',
        birthday:'1992-12-24',
        email:'yosa@gmail.com',
        phone:'087845645',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name:'Agung',
        last_name:'Caproex',
        gender:'male',
        birthday:'1998-12-24',
        email:'agung@gmail.com',
        phone:'02145689',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

    return queryInterface.bulkInsert('Students', arrOfObject, {});
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
