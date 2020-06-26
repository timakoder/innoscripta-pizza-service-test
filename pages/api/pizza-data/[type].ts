import { NextApiResponse } from 'next';
import {
  controllerErrorsHandler,
  validateRequest,
  ValidatedNextApiRequest
} from '../../../server/utils';
import * as PizzaDataService from '../../../server/services/pizza-data';
import Joi from 'joi';


export type PizzaDataResponse = {
  items: PizzaDataService.PizzaData[],
  meta: {
    type: string
  }
}

type QueryParams = {
  type: 'tag' | 'ingredient'
}

const QueryParamsValidationSchema = {
  type: Joi.string().valid('tag', 'ingredient')
}

export default controllerErrorsHandler<PizzaDataResponse>(
  validateRequest<QueryParams>({
    querySchema: QueryParamsValidationSchema,
    bodySchema: {}
  })(
    async (req: ValidatedNextApiRequest<QueryParams, {}>, res: NextApiResponse<PizzaDataResponse>) => {
      const data = await PizzaDataService.getPizzaData(req.validatedQuery.type);

      res.status(200).json({
        items: data,
        meta: {
          type: req.validatedQuery.type
        }
      })
    }
  )
)