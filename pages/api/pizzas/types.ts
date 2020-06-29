import { Pizza, PizzaData } from '../../../server/services/pizza';

export type PizzasResponse = {
  pizzas: Pizza[],
  tags: PizzaData[],
  ingredients: PizzaData[],
  meta: {
    tags: string[],
    ingredients: string[],
    total: number
  }
}