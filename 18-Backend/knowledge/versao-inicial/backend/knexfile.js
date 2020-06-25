// Update with your config settings.

module.exports = {
  client: 'postgresql',
  connection: {
    database: 'knowledge',
    user:     'postgres@guilhermegranja',
    password: 'Guilherme'
  },
  pool: {
    min: 0,
    max: 100
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};