exports.up = function(knex) {
  return knex.schema.createTable('ingredient', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.unique('name');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ingredient');
};
