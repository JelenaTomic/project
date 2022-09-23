const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'cloud_instance_private_ip',
    dialect: 'mysql',
    port: 8889,
    connectionLimit: 10,
    socketPath: '/var/run/mysqld/mysqld.sock'

  }
  
);

module.exports = sequelize;
