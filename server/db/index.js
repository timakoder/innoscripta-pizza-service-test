const knex = require('knex');
const env = process.env.NODE_ENV || 'development';
const connectionConfig = require('../../knexfile')[env];

module.exports = knex(connectionConfig);