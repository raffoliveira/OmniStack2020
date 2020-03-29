const knex = require('knex') //import
const configuration = require('../../knexfile');
const connection = knex(configuration.development);

module.exports = connection;