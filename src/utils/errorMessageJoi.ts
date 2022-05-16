import Joi from 'joi';
import { BadRequestError, UnprocessableEntityError } from 'restify-errors';

const ErrorMessageJoi = (err: Joi.ValidationError) => {
  if (err.details[0].type === 'any.required') {
    throw new BadRequestError(err.message);
  }

  throw new UnprocessableEntityError(err.message);
};

export default ErrorMessageJoi;