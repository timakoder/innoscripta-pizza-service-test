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

type BodyParams = {
  ingredients: string[],
  tags: string[]
};

const BodyParamsValidationSchema = {
  ingredients: Joi.array().allow([]).items(Joi.string()).default([]),
  tags: Joi.array().allow([]).items(Joi.string()).default([])
};

export default controllerErrorsHandler<PizzasResponse>(
  validateRequest<{}, BodyParams>({
    querySchema: {},
    bodySchema: BodyParamsValidationSchema
  })(
    async (req: ValidatedNextApiRequest<{}, BodyParams>, res: NextApiResponse<PizzasResponse>) => {
      const [
        pizzas,
        ingredientsData,
        tagsData
      ] = await Promise.all([
        PizzaService.getPizzas({
          ingredients: req.validatedBody.ingredients,
          tags: req.validatedBody.tags
        }),
        PizzaService.getPizzaData({ type: 'ingredient', tags: req.validatedBody.tags, ingredients: [] }),
        PizzaService.getPizzaData({ type: 'tag', ingredients: req.validatedBody.ingredients, tags: [] })
      ]);
      return res.status(200).json({
        pizzas,
        tags: tagsData,
        ingredients: ingredientsData,
        meta: {
          ingredients: req.validatedBody.ingredients
            .filter(i => ingredientsData.find(ing => ing.name === i)),
          tags: req.validatedBody.tags
            .filter(t => tagsData.find(tag => tag.name === t)),
          total: pizzas.length
        }
      });
    }
  )
);