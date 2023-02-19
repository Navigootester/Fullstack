
const { Sequelize } = require('sequelize');

module.exports = new Sequelize('fullstack', 'postgres', 'navigoo', {
    dialect: 'postgres',
    host: 'localhost',
        pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
  })
