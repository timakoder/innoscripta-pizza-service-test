
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {id: 1, name: 'green peppers'},
        {id: 2, name: 'pineapples'},
        {id: 3, name: 'mozzarella'},
        {id: 4, name: 'sausages'},
        {id: 5, name: 'red peppers'},
        {id: 6, name: 'soft cheese'},
        {id: 7, name: 'tomatoes'},
        {id: 8, name: 'onions'},
        {id: 9, name: 'bacon'},
        {id: 10, name: 'salmon'},
        {id: 11, name: 'pork'},
        {id: 12, name: 'mushrooms'},
        {id: 13, name: 'pepperoni'},
        {id: 14, name: 'chicken'},
        {id: 15, name: 'blue cheese'},
        {id: 16, name: 'garlic'},
        {id: 17, name: 'ham'},
        {id: 18, name: 'olives'},
        {id: 19, name: 'oregano'},
        {id: 20, name: 'beef'},
        {id: 21, name: 'jalapeno'},
        {id: 22, name: 'cucumber'},
        {id: 23, name: 'seafood'},
        {id: 24, name: 'parmesan'}
      ]);
    });
};
