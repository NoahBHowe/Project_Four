const pgp       = require('pg-promise')();

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'crime_time'
});

module.exports = db;
