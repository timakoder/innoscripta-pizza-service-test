import { NextApiRequest, NextApiResponse } from 'next';
import * as PizzaService from '../../server/services/pizza';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const pizzas = await PizzaService.getPizzas();
  return res.status(200).json(pizzas);
}