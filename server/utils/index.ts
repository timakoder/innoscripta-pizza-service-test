import { NextApiRequest, NextApiResponse } from 'next';
import Joi from 'joi';


export class HTTPError extends Error {
  status: number;

  constructor(m: string, status: number) {
      super(m);
      this.status = status;
      Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class HTTPBadRequestError extends HTTPError {
  constructor(m: string) {
    super(m, 400);
  }
}

type FieldValidationErrorDescription = {
  message: string,
  field: string
}

export class HTTPJoiValidationError extends HTTPError {
  fields: FieldValidationErrorDescription[];

  constructor(err: Joi.ValidationError) {
    super('Validation error', 400);
    const errorFields = err.details.map(({ message, path }) => ({
      message,
      field: path.join('.')
    }))
    this.fields = errorFields;
  }
}

export class HTTPNotFoundError extends HTTPError {
  constructor(m: string) {
    super(m, 404);
  }
}

export class HTTPAccessDeniedError extends HTTPError {
  constructor(m: string) {
    super(m, 403);
  }
}

export type ErrorResponse = {
  message: string,
  internalMessage?: string
  fields?: FieldValidationErrorDescription[]
}

export const controllerErrorsHandler = <T>(fn: (req: NextApiRequest, res: NextApiResponse<T>) => Promise<void>) =>
  async (req: NextApiRequest, res: NextApiResponse<T | ErrorResponse>) => {
    try {
      await fn(req, res);
    } catch (err) {
      if (err instanceof HTTPError) {
        const json: ErrorResponse = {
          message: err.message
        }

        if (err instanceof HTTPJoiValidationError) {
          json.fields = err.fields;
        }

        res.status(err.status).json(json);
      } else {
        res.status(500).json({
          message: 'Unexpected error',
          internalMessage: err.message
        })
      }
    }
  }


type ValidationSchema<T> = {
  [key in keyof T]: Joi.Schema
}

type ValidateRequestParams<T, K> = {
  querySchema: ValidationSchema<T>,
  bodySchema: ValidationSchema<K>
}

const joiValidate = <T>(data: T, schema: ValidationSchema<T>): T => {
  const validated = Joi.validate<T>(data, Joi.object(schema).required(), {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true
  })

  if (validated.error) {
    throw new HTTPJoiValidationError(validated.error);
  }

  return validated.value;
}

export type ValidatedNextApiRequest<T, K> = NextApiRequest & {
  validatedQuery: T,
  validatedBody: K
}

export const validateRequest = <T = {}, K = {}>(params: ValidateRequestParams<T, K>) =>
  (fn: (req: ValidatedNextApiRequest<T, K>, res: NextApiResponse) => Promise<void>) =>
    async (req: ValidatedNextApiRequest<T, K>, res: NextApiResponse) => {
      const validatedQuery = joiValidate<T>(req.query as unknown as T, params.querySchema);
      const validatedBody = joiValidate<K>(req.query as unknown as K, params.bodySchema);

      req.validatedQuery = validatedQuery;
      req.validatedBody = validatedBody;

      fn(req, res);
    }