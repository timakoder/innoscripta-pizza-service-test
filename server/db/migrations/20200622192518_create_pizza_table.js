exports.up = function(knex) {
  return knex.schema.createTable('pizza', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.string('image_url').notNullable();
    table.jsonb('tags')
    table.unique('name');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('pizza');
};
