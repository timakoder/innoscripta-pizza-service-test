import db from '../../db';

export type PizzaData = {
  name: string,
  quantity: number
}

export const getPizzaData = async (type: 'tag' | 'ingredient'): Promise<PizzaData[]> => {
  const data = await db(type)
    .select<any, PizzaData[]>(
      `${type}.name`,
      db.raw('count(*) as quantity')
    )
    .innerJoin(`pizza_${type}`, `pizza_${type}.${type}_id`, `${type}.id`)
    .groupBy(`${type}.name`);
   
  return data;
}