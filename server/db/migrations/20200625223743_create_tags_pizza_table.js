exports.up = function(knex) {
  return knex.schema.createTable('pizza_tag', (table) => {
    table.increments();
    table.integer('pizza_id').unsigned().notNullable();
    table.integer('tag_id').unsigned().notNullable();
    table.foreign('pizza_id').references('pizza.id').onDelete('CASCADE');
    table.foreign('tag_id').references('tag.id').onDelete('CASCADE');
    table.unique(['pizza_id', 'tag_id'])
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('pizza_tag');
};
