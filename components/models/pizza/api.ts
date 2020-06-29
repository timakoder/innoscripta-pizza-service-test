import { axiosInstance } from '../../utils';
import { PizzasResponse } from '../../../pages/api/pizzas/types';

export type GetPizzasType = PizzasResponse;

export type GetPizzaParams = {
  tags: string[],
  ingredients: string[]
}

const buildArrayQs = (arr: string[], name: string) =>
  arr.map(t => `${name}=${t}`).join('&')

export const getPizzas = async (params: GetPizzaParams): Promise<PizzasResponse> => {
  const pizzas = await axiosInstance
    .get<PizzasResponse>(`pizzas?${buildArrayQs(params.tags, 'tags')}&${buildArrayQs(params.ingredients, 'ingredients')}`);
  return pizzas.data;
}
