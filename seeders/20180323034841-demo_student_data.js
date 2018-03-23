'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Students', [{
      firstName: 'Nikolas',
      lastName: 'Friesen',
      gender: 'female',
      birthday: new Date('1998-12-24'),
      email:'agustina@wintheiser.info',
      phone:'449.897.7415',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Randi',
      lastName: 'Halvorson',
      gender: 'male',
      birthday: new Date('1997-1-29'),
      email:'heberUpton@becthelar.biz',
      phone:'(697)436-2633',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Sally',
      lastName: 'Buckridge',
      gender: 'female',
      birthday: new Date('1997-10-30'),
      email:'nora@treutel.name',
      phone:'1-351-672-6358x02502',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Morris',
      lastName: 'Swift',
      gender: 'male',
      birthday: new Date('1995-6-27') ,
      email:'cordell@sandfordduhklman.org',
      phone:'(600)142-5639x9380',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Sidney',
      lastName: 'Friesen',
      gender: 'female',
      birthday: new Date('1997-4-04'),
      email:'erling@davis.name',
      phone:'554.170.3625',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    firstName: 'Reid',
    lastName: 'Skiles',
    gender: 'male',
    birthday: new Date('1994-10-13'),
    email: 'mike_harvey@nikolaus.com',
    phone: '(543)511-2123',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {

    firstName: 'Violet',
    lastName: 'Dickens',
    gender: 'female',
    birthday: new Date('1994-11-19'),
    email: 'rubye_olson@collins.biz',
    phone: '1-410-486-1411x5058',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    firstName: 'Marguerite',
    lastName: 'Flatley',
    gender: 'female',
    birthday: new Date('1995-5-28'),
    email: 'wanda_oknon@hane.meme',
    phone: '572.978.5828x07860',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    firstName: 'Cary',
    lastName: 'Schoen',
    gender: 'male',
    birthday: new Date('1996-7-31'),
    email: 'fay@runolfon.biz',
    phone: '1-828-134-7828x66958',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    firstName: 'Mazie',
    lastName: 'Gibson',
    gender: 'female',
    birthday: new Date('1995-9-23'),
    email: 'doug@roberts.biz',
    phone: '144.038.7351x24117',
    createdAt: new Date(),
    updatedAt: new Date()
  }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
