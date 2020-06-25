const path = require('path');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'dev_user',
      password: '1234',
      database: 'dev_db'
    },
    migrations: {
      directory: path.join(process.cwd(), 'server', 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(process.cwd(), 'server', 'db', 'seeds'),
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(process.cwd(), 'server', 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(process.cwd(), 'server', 'db', 'seeds'),
    }
  },
};