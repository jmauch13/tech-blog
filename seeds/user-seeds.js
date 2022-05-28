const { User } = require('../models');

const userData = [
    {
        username: 'jmauch13',
        email: 'jenniemauch@me.com',
        password: 'p@ssword1'
    },
    {
        username: 'joe3',
        email: 'joe@fakemail.com',
        password: 'p@ssword2'
    },
    {
        username: 'heatherq',
        email: 'heather@fakemail.com',
        password: 'p@ssword3'
    },
    {
        username: 'brodyboy09',
        email: 'brody@fakemail.com',
        password: 'p@ssword4'
    },
    {
        username: 'jordanp',
        email: 'jordan@fakemail.com',
        password: 'p@ssword5'
    },
    {
        username: 'bellagirl',
        email: 'bella@fakemail.com',
        password: 'p@ssword6'
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;