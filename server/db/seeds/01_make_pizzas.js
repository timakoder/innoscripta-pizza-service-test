exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pizza').del()
    .then(function () {
      // Inserts seed entries
      return knex('pizza').insert([
        {
           "name":"Sweet and sour pork",
           "description":"Bright pizza with pork, pineapple, sweet and sour sauce, red and green peppers and Mozzarella cheese",
           "image_url":"/home/tima/Documents/innoscripta-pizza-service-test/public/img/pizzas/sweet-and-sour-pork.jpg",
           "id":1
        },
        {
           "name":"Spinach and Cheese",
           "description":"Ultra-thin dough, chopped spinach, Mozzarella, soft fresh cheese, cream cheese.",
           "image_url":"/home/tima/Documents/innoscripta-pizza-service-test/public/img/pizzas/spinach-and-cheese.png",
           "id":2
        },
        {
           "name":"Favorite Carbonara",
           "description":"Classic favorite recipe: crispy bacon, cream cheese, juicy tomatoes, onions, Mozzarella and Italian herbs blend",
           "image_url":"/home/tima/Documents/innoscripta-pizza-service-test/public/img/pizzas/favorite-carbonara.png",
           "id":3
        },
        {
           "name":"Pizza with red fish",
           "description":"The long-awaited pizza! Fresh taste!\r\nBold mix of salmon fish with mozzarella cheese, cream cheese and tomatoes",
           "image_url":"/home/tima/Documents/innoscripta-pizza-service-test/public/img/pizzas/pizza-with-red-fish.jpg",
           "id":4
        },
        {
           "name":"Italian with mozzarella and pepperoni",
           "description":"Traditional Italian recipe with two types of cheese: grated Mozzarella and classic chillegini; spicy pepperoni, mushrooms and blend of seasonings",
           "image_url":"/home/tima/Documents/innoscripta-pizza-service-test/public/img/pizzas/italian-with-mozzarella-and-pepperoni.jpg",
           "id":5
        },
        {
           "name":"Chicken blue cheese ",
           "description":"Perfect combination: tender chicken fillet with blue cheese crumbles, Parmeggiano sauce, mix of Italian cheeses and Mozzarella cheese",
           "image_url":"/home/tima/Documents/innoscripta-pizza-service-test/public/img/pizzas/chicken-blue-cheese.png",
           "id":6
        },
        {
           "name":"9 Cheeses",
           "description":"New taste! Blend of cheeses: Mozzarella, soft cheese, blue cheese, smoked Italian cheeses, Reggianito, Cheddar with sauce cheesy Parmigiano and oregano",
           "image_url":"/home/tima/Documents/innoscripta-pizza-service-test/public/img/pizzas/9-cheeses.png",
           "id":7
        },
        {
           "name":"Papa Mix",
           "description":"Four favorite pizza: Pepperoni, Chicken BBQ, Four cheeses & Margherita",
           "image_url":"/home/tima/Documents/innoscripta-pizza-service-test/public/img/pizzas/papa-mix.png",
           "id":8
        },
        {
           "name":"Papa Mix Ranch",
           "description":"Four favorite pizzas: Chicken ranch, Hum and mushrooms, Four cheese, Marine",
           "image_url":"/home/tima/Documents/innoscripta-pizza-service-test/public/img/pizzas/papa-mix-ranch.png",
           "id":9
        },
        {
           "name":"Cheese pizza",
           "description":"Simple and delicious: with signature tomato sauce and trailing Mozzarella",
           "image_url":"/home/tima/Documents/innoscripta-pizza-service-test/public/img/pizzas/cheese-pizza.jpg",
           "id":10
        },
        {
           "name":"Super Papa",
           "description":" \"Papa John's hit\" with spicy pepperoni, ham, flavorful pork, signature tomato sauce, Mozzarella, mushrooms, onions, olives and sweet green pepper",
           "image_url":"/home/tima/Documents/innoscripta-pizza-service-test/public/img/pizzas/super-papa.jpg",
           "id":11
        },
        {
           "name":"Chicken BBQ",
           "description":"Juicy chicken fillet and crispy bacon combined with signature tomato sauce, Mozzarella and onion",
           "image_url":"/home/tima/Documents/innoscripta-pizza-service-test/public/img/pizzas/chicken-bbq.jpg",
           "id":12
        },
        {
           "name":"Pepperoni",
           "description":"American classic with spicy pepperoni, Mozzarella and signature tomato sauce",
           "image_url":"/home/tima/Documents/innoscripta-pizza-service-test/public/img/pizzas/pepperoni.jpg",
           "id":13
        },
        {
           "name":"Margherita",
           "description":"Traditional recipe with signature tomato sauce, Mozzarella, oregano and juicy tomatoes",
           "image_url":"/home/tima/Documents/innoscripta-pizza-service-test/public/img/pizzas/margherita.jpg",
           "id":14
        },
        {
           "name":"Four cheeses",
           "description":"Traditional blend of cheeses: Mozzarella, soft fresh cheese, blue cheese, Reggianito with signature  tomato sauce  and spicy oregano",
           "image_url":"/home/tima/Documents/innoscripta-pizza-service-test/public/img/pizzas/four-cheeses.jpg",
           "id":15
        },
        {
           "name":"Meat",
           "description":"Super meat pizza with spicy pepperoni, ham, crispy bacon, flavorful pork, beef, Mozzarella and signature tomato sauce\r\n",
           "image_url":"/home/tima/Documents/innoscripta-pizza-service-test/public/img/pizzas/meat.jpg",
           "id":16
        },
        {
           "name":"Alfredo",
           "description":"Pizza with creamy spinach sauce, Mozzarella, ham, crispy bacon, mushrooms and juicy tomatoes",
           "image_url":"/home/tima/Documents/innoscripta-pizza-service-test/public/img/pizzas/alfredo.jpg",
           "id":17
        },
        {
           "name":"Mexican",
           "description":"Spicy pizza with chicken fillet, tomato sauce, Mozzarella, mushrooms, onions, tomatoes, sweet green pepper and jalapeno pepper",
           "image_url":"/home/tima/Documents/innoscripta-pizza-service-test/public/img/pizzas/mexican.jpg",
           "id":18
        },
        {
           "name":"Hawaiian",
           "description":"Tropical classic with flavorful ham, tomato sauce and Mozzarella combined with pineapple bits",
           "image_url":"/home/tima/Documents/innoscripta-pizza-service-test/public/img/pizzas/hawaiian.jpg",
           "id":19
        },
        {
           "name":"Ham and mushrooms",
           "description":"Delicate pizza with Garlic ranch sauce, Mozzarella, mushrooms, flavorful ham and garlic",
           "image_url":"/home/tima/Documents/innoscripta-pizza-service-test/public/img/pizzas/ham-and-mushrooms.jpg",
           "id":20
        },
        {
           "name":"Ultimate cheeseburger",
           "description":"Super pizza with Mozzarella, Parmesan, Fontina and smoked Italian cheeses blend, \"Thousand Islands\" sauce, beef, bacon, juicy tomatoes, pickles and onions",
           "image_url":"/home/tima/Documents/innoscripta-pizza-service-test/public/img/pizzas/ultimate-cheeseburger.jpg",
           "id":21
        },
        {
           "name":"Chicken ranch",
           "description":"Spicy pizza with chicken fillet, crispy bacon, garlic ranch sauce, Mozzarella, garlic and tomatoes",
           "image_url":"/home/tima/Documents/innoscripta-pizza-service-test/public/img/pizzas/chicken-ranch.jpg",
           "id":22
        },
        {
           "name":"Marine",
           "description":"For seafood lovers: sea cocktail, garlic ranch sauce, Mozzarella, sweet green and red peppers, onions, garlic and Italian herbs blend",
           "image_url":"/home/tima/Documents/innoscripta-pizza-service-test/public/img/pizzas/marine.jpg",
           "id":23
        }
     ]);
    });
};
