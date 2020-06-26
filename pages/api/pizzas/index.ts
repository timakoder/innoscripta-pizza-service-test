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
    return str;
  }

  return [str];
}

type QueryParams = {
  ingredients?: string | string[],
  tags?: string | string[]
};

const QueryParamsValidationSchema = {
  ingredients: Joi.alternatives().try(Joi.string(), Joi.array().items(Joi.string())),
  tags: Joi.alternatives().try(Joi.string(), Joi.array().items(Joi.string()))
};

export default controllerErrorsHandler<PizzasResponse>(
  validateRequest<QueryParams>({
    querySchema: QueryParamsValidationSchema,
    bodySchema: {}
  })(
    async (req: ValidatedNextApiRequest<QueryParams, {}>, res: NextApiResponse<PizzasResponse>) => {
      const ingredients = getStringsArrayOrUndefined(req.validatedQuery.ingredients);
      const tags = getStringsArrayOrUndefined(req.validatedQuery.tags);

      const pizzas = await PizzaService.getPizzas({
        ingredients,
        tags
      });
      return res.status(200).json({
        items: pizzas,
        meta: {
          ingredients,
          tags,
          total: pizzas.length
        }
      });
    }
  )
);