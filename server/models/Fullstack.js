const Sequelize = require('sequelize');
const db = require('../config/database');

const Fullstack = db.define('fullstack', {
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }

})
//Testing
module.exports = Fullstack;
