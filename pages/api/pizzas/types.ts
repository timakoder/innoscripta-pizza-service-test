import { Pizza, GetPizzaParams } from '../../../server/services/pizza';

export type PizzasResponse = {
  items: Pizza[],
  meta: GetPizzaParams & {
    total: number
  }
}