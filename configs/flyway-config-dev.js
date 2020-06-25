const flywayArgs = {
  url: `jdbc:postgresql://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  table: 'migrations_history',
  locations: 'filesystem:./',
};

module.exports = {
  flywayArgs
};
