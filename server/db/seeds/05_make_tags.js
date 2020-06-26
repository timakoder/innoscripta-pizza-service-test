
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tag').del()
    .then(function () {
      // Inserts seed entries
      return knex('tag').insert([
        {id: 1, name: 'spicy'},
        {id: 2, name: 'vegetarian'}
      ]);
    });
};
