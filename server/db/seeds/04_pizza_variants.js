
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pizza_variant').del()
    .then(function () {
      // Inserts seed entries
      return knex('pizza_variant').insert([
        {
          pizza_id: 1,
          quantity: 5,
          size: 'small',
          price: 6.5
        },
        {
          pizza_id: 1,
          quantity: 5,
          size: 'medium',
          price: 8.5
        },
        {
          pizza_id: 1,
          quantity: 5,
          size: 'large',
          price: 10.5
        },
        {
          pizza_id: 2,
          quantity: 5,
          size: 'large',
          price: 9
        },
        {
          pizza_id: 3,
          quantity: 5,
          size: 'small',
          price: 7
        },
        {
          pizza_id: 3,
          quantity: 5,
          size: 'medium',
          price: 9.5
        },
        {
          pizza_id: 3,
          quantity: 5,
          size: 'large',
          price: 12
        },
        {
          pizza_id: 4,
          quantity: 5,
          size: 'medium',
          price: 11
        },
        {
          pizza_id: 4,
          quantity: 5,
          size: 'large',
          price: 14
        },
        {
          pizza_id: 5,
          quantity: 5,
          size: 'small',
          price: 6
        },
        {
          pizza_id: 5,
          quantity: 5,
          size: 'medium',
          price: 8
        },
        {
          pizza_id: 5,
          quantity: 5,
          size: 'large',
          price: 10
        },
        {
          pizza_id: 6,
          quantity: 5,
          size: 'small',
          price: 6.7
        },
        {
          pizza_id: 6,
          quantity: 5,
          size: 'medium',
          price: 8.7
        },
        {
          pizza_id: 6,
          quantity: 5,
          size: 'large',
          price: 10.7
        },
        {
          pizza_id: 7,
          quantity: 5,
          size: 'small',
          price: 7
        },
        {
          pizza_id: 7,
          quantity: 5,
          size: 'medium',
          price: 9
        },
        {
          pizza_id: 7,
          quantity: 5,
          size: 'large',
          price: 11
        },
        {
          pizza_id: 8,
          quantity: 5,
          size: 'large',
          price: 13
        },
        {
          pizza_id: 9,
          quantity: 5,
          size: 'large',
          price: 15
        },
        {
          pizza_id: 10,
          quantity: 5,
          size: 'small',
          price: 3.5
        },
        {
          pizza_id: 10,
          quantity: 5,
          size: 'medium',
          price: 5
        },
        {
          pizza_id: 10,
          quantity: 5,
          size: 'large',
          price: 6.5
        },
        {
          pizza_id: 11,
          quantity: 5,
          size: 'small',
          price: 6.7
        },
        {
          pizza_id: 11,
          quantity: 5,
          size: 'medium',
          price: 8.7
        },
        {
          pizza_id: 11,
          quantity: 5,
          size: 'large',
          price: 10.7
        },
        {
          pizza_id: 12,
          quantity: 5,
          size: 'small',
          price: 6
        },
        {
          pizza_id: 12,
          quantity: 5,
          size: 'medium',
          price: 8
        },
        {
          pizza_id: 12,
          quantity: 5,
          size: 'large',
          price: 10
        },
        {
          pizza_id: 13,
          quantity: 5,
          size: 'small',
          price: 5
        },
        {
          pizza_id: 13,
          quantity: 5,
          size: 'medium',
          price: 7
        },
        {
          pizza_id: 13,
          quantity: 5,
          size: 'large',
          price: 9
        },
        {
          pizza_id: 14,
          quantity: 5,
          size: 'small',
          price: 4.5
        },
        {
          pizza_id: 14,
          quantity: 5,
          size: 'medium',
          price: 6
        },
        {
          pizza_id: 14,
          quantity: 5,
          size: 'large',
          price: 7.5
        },
        {
          pizza_id: 15,
          quantity: 5,
          size: 'small',
          price: 6.5
        },
        {
          pizza_id: 15,
          quantity: 5,
          size: 'medium',
          price: 9
        },
        {
          pizza_id: 15,
          quantity: 5,
          size: 'large',
          price: 11.5
        },
        {
          pizza_id: 16,
          quantity: 5,
          size: 'small',
          price: 7
        },
        {
          pizza_id: 16,
          quantity: 5,
          size: 'medium',
          price: 10
        },
        {
          pizza_id: 16,
          quantity: 5,
          size: 'large',
          price: 13
        },
        {
          pizza_id: 17,
          quantity: 5,
          size: 'small',
          price: 7
        },
        {
          pizza_id: 17,
          quantity: 5,
          size: 'medium',
          price: 10
        },
        {
          pizza_id: 17,
          quantity: 5,
          size: 'large',
          price: 13
        },
        {
          pizza_id: 18,
          quantity: 5,
          size: 'small',
          price: 6
        },
        {
          pizza_id: 18,
          quantity: 5,
          size: 'medium',
          price: 8
        },
        {
          pizza_id: 18,
          quantity: 5,
          size: 'large',
          price: 10
        },
        {
          pizza_id: 19,
          quantity: 5,
          size: 'medium',
          price: 8
        },
        {
          pizza_id: 19,
          quantity: 5,
          size: 'large',
          price: 10
        },
        {
          pizza_id: 20,
          quantity: 5,
          size: 'small',
          price: 5.5
        },
        {
          pizza_id: 20,
          quantity: 5,
          size: 'medium',
          price: 7
        },
        {
          pizza_id: 20,
          quantity: 5,
          size: 'large',
          price: 9
        },
        {
          pizza_id: 21,
          quantity: 5,
          size: 'small',
          price: 6.5
        },
        {
          pizza_id: 21,
          quantity: 5,
          size: 'medium',
          price: 8.5
        },
        {
          pizza_id: 21,
          quantity: 5,
          size: 'large',
          price: 10.5
        },
        {
          pizza_id: 22,
          quantity: 5,
          size: 'small',
          price: 6.5
        },
        {
          pizza_id: 22,
          quantity: 5,
          size: 'medium',
          price: 8.5
        },
        {
          pizza_id: 22,
          quantity: 5,
          size: 'large',
          price: 10.5
        },
        {
          pizza_id: 23,
          quantity: 5,
          size: 'small',
          price: 6.5
        },
        {
          pizza_id: 23,
          quantity: 5,
          size: 'medium',
          price: 8.5
        },
        {
          pizza_id: 23,
          quantity: 5,
          size: 'large',
          price: 10.5
        }
      ]);
    });
};
