import { NextApiResponse } from 'next';
import { PizzasResponse } from './types';
import * as PizzaService from '../../../server/services/pizza';
import {
  controllerErrorsHandler,
  validateRequest,
  ValidatedNextApiRequest
} from '../../../server/utils';
import Joi from 'joi';

const getStringsArrayOrUndefined = (str?: string | string[]): string[] | undefined => {
  if (!str) {
    return undefined;
  }

  if (Array.isArray(str)) {
    return str.length > 0 ? str : undefined;
  }

  return str.length > 0 ? [str] : undefined;
}

type QueryParams = {
  ingredients?: string | string[],
  tags?: string | string[]
};

const QueryParamsValidationSchema = {
  ingredients: Joi.alternatives().try(Joi.string().allow(''), Joi.array().allow([]).items(Joi.string())),
  tags: Joi.alternatives().try(Joi.string().allow(''), Joi.array().allow([]).items(Joi.string()))
};

export default controllerErrorsHandler<PizzasResponse>(
  validateRequest<QueryParams>({
    querySchema: QueryParamsValidationSchema,
    bodySchema: {}
  })(
    async (req: ValidatedNextApiRequest<QueryParams, {}>, res: NextApiResponse<PizzasResponse>) => {
      const ingredients = getStringsArrayOrUndefined(req.validatedQuery.ingredients);
      const tags = getStringsArrayOrUndefined(req.validatedQuery.tags);
      console.log(req.query);
      const [
        pizzas,
        ingredientsData,
        tagsData
      ] = await Promise.all([
        PizzaService.getPizzas({
          ingredients,
          tags
        }),
        PizzaService.getPizzaData({ type: 'ingredient', tags }),
        PizzaService.getPizzaData({ type: 'tag', ingredients })
      ]);
      return res.status(200).json({
        pizzas,
        tags: tagsData,
        ingredients: ingredientsData,
        meta: {
          ingredients: ingredients || [],
          tags: tags || [],
          total: pizzas.length
        }
      });
    }
  )
);