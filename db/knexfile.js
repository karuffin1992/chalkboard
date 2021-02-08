// Update with your config settings.

const knex = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'chalkboard'
    }
  }
};

module.exports = knex;
