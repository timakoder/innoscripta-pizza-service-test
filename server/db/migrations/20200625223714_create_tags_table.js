exports.up = function(knex) {
  return knex.schema.createTable('tag', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.unique('name');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tag');
};
