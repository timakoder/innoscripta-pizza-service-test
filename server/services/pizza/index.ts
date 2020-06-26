import db from '../../db';
import Knex from 'knex';

export type GetPizzaParams = {
  ingredients?: string[]
  tags?: string[]
}

export type PizzaSize = 'small' | 'medium' | 'large'

export type PizzaVariant = {
  id: number,
  price: number,
  quantity: number,
  size: PizzaSize
}

export type PizzaDBSchema = {
  id: number,
  name: string,
  description: string,
  imageUrl: string,
  tag?: string,
  ingredient?: string | null,
  variantID?: number,
  variantPrice?: number,
  variantQuantity?: number,
  variantSize?: PizzaSize
}

export type Pizza = {
  id: number,
  name: string,
  description: string,
  imageUrl: string,
  tags: string[],
  ingredients: string[],
  variants: PizzaVariant[]
}


type GroupedPizzas = {
  [k: number]: Omit<Pizza, 'variants' | 'tags' | 'ingredients'> & {
    variants: { [k: number]: PizzaVariant },
    tags: { [k: string]: boolean },
    ingredients: { [k: string]: boolean }
  }
}

const groupPizzas = (pizzas: PizzaDBSchema[]): Pizza[] => {
  const groupObject: GroupedPizzas = pizzas
    .reduce((acc: GroupedPizzas, p): GroupedPizzas => {
      if (!acc[p.id]) {
        acc[p.id] = {
          id: p.id,
          name: p.name,
          description: p.description,
          imageUrl: p.imageUrl,
          tags: {},
          ingredients: {},
          variants: {}
        }
      }

      if (!!p.variantID && !acc[p.id].variants[p.variantID]) {
        acc[p.id].variants[p.variantID] = {
          price: p.variantPrice,
          quantity: p.variantQuantity,
          id: p.variantID,
          size: p.variantSize
        };
      }

      if (!!p.tag) {
        acc[p.id].tags[p.tag] = true;
      }

      if (!!p.ingredient) {
        acc[p.id].ingredients[p.ingredient] = true;
      }

      return acc;
    }, {});

  return Object
    .values(groupObject)
    .map(p => ({
      ...p,
      variants: Object.values(p.variants),
      tags: Object.keys(p.tags),
      ingredients: Object.keys(p.ingredients)
    }))
}

const buildPizzaIDsQuery = (names: string[], dataTable: string) => {
  const getIDsQuery = db(dataTable).select('id').whereIn('name', names);
  return db(`pizza_${dataTable}`).select('pizza_id').whereIn(`${dataTable}_id`, getIDsQuery);
}

export const getPizzas = async (params: GetPizzaParams): Promise<Pizza[]> => {
  let pizzasQuery = db('pizza')
    .select<any, PizzaDBSchema[]>(
      'pizza.id',
      'pizza.name',
      'pizza.description',
      'pizza.image_url as imageUrl',
      'tag.name as tag',
      'ingredient.name as ingredient',
      'pizza_variant.id as variantID',
      'pizza_variant.price as variantPrice',
      'pizza_variant.quantity as variantQuantity',
      'pizza_variant.size as variantSize'
    )
    .innerJoin('pizza_variant', 'pizza_variant.pizza_id', 'pizza.id')
    .leftJoin('pizza_ingredient', 'pizza_ingredient.pizza_id', 'pizza.id')
    .leftJoin('ingredient', 'ingredient.id', 'pizza_ingredient.ingredient_id')
    .leftJoin('pizza_tag', 'pizza_tag.pizza_id', 'pizza.id')
    .leftJoin('tag', 'tag.id', 'pizza_tag.tag_id');
  
  if (params.ingredients) {
    pizzasQuery = pizzasQuery.whereIn('pizza.id', buildPizzaIDsQuery(params.ingredients, 'ingredient'));
  }

  if (params.tags) {
    pizzasQuery = pizzasQuery.whereIn('pizza.id', buildPizzaIDsQuery(params.tags, 'tag'));
  }

  const pizzas = await pizzasQuery;

  return groupPizzas(pizzas);
}