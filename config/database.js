const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ApiGastos', 'usuario', '123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
