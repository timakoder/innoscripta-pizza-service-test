import { axiosInstance } from '../../utils';
import { PizzasResponse } from '../../../pages/api/pizzas/types';

export type GetPizzasType = PizzasResponse;

export type GetPizzaParams = {
  tags: string[],
  ingredients: string[]
}

export const getPizzas = async (params: GetPizzaParams): Promise<PizzasResponse> => {
  const pizzas = await axiosInstance
    .post<PizzasResponse>('pizzas', {
      data: {
        tags: params.tags,
        ingredients: params.ingredients
      }
    });
  return pizzas.data;
}
