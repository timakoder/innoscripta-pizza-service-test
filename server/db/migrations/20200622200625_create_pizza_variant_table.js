exports.up = function(knex) {
  return knex.schema.createTable('pizza_variant', (table) => {
    table.increments();
    table.integer('pizza_id').unsigned().notNullable();
    table.float('price').unsigned().notNullable();
    table.integer('quantity').notNullable();
    table.enu('size', ['small', 'medium', 'large']).notNullable();
    table.foreign('pizza_id').references('pizza.id').onDelete('CASCADE');
    table.unique(['pizza_id', 'size']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('pizza_variant');
};
