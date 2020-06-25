exports.up = function(knex) {
  return knex.schema.createTable('pizza_ingredient', (table) => {
    table.increments();
    table.integer('pizza_id').unsigned().notNullable();
    table.integer('ingredient_id').unsigned().notNullable();
    table.foreign('pizza_id').references('pizza.id').onDelete('CASCADE');
    table.foreign('ingredient_id').references('ingredient.id').onDelete('CASCADE');
    table.unique(['pizza_id', 'ingredient_id'])
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('pizza_ingredient');
};
