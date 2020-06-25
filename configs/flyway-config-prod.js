const flywayArgs = {
  url: `jdbc:postgresql://ec2-54-228-250-82.eu-west-1.compute.amazonaws.com:5432/d32bs6di4928at`,
  user: 'bhifbggqdcdgya',
  password: '6ac84e6db47a83b7b0eb2a06557f7cb51933c6e9806a39ccd791a1ee6a68c49c',
  table: 'migrations_history',
  locations: 'filesystem:./',
};

module.exports = {
  flywayArgs
};
