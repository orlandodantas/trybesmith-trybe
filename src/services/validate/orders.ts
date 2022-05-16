import Joi from 'joi';
import { BadRequestError, UnprocessableEntityError } from 'restify-errors';
import { OrderWithProducts } from '../../types/order.types';

const validateError = (err: Joi.ValidationError) => {
  if (err.details[0].type === 'any.required') {
    throw new BadRequestError(err.message);
  }

  throw new UnprocessableEntityError(err.message);
};

const schema = Joi.object({
  productsIds: Joi.array().items(Joi.number().required()).required()
    .messages({
      'array.includesRequiredUnknowns': '"productsIds" must include only numbers',
    }),
  userId: Joi.number(),
});

const validateFields = (order: OrderWithProducts) => {
  const { error } = schema.validate(order);

  if (error) validateError(error);
};

export default validateFields;