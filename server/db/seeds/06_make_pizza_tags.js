
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pizza_tag').del()
    .then(function () {
      // Inserts seed entries
      return knex('pizza_tag').insert([
        {pizza_id: 2, tag_id: 2},
        {pizza_id: 14, tag_id: 2},
        {pizza_id: 18, tag_id: 1},
        {pizza_id: 7, tag_id: 2},
        {pizza_id: 10, tag_id: 2},
        {pizza_id: 15, tag_id: 2},
      ]);
    });
};
