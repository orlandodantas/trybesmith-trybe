import Joi from 'joi';
import { OrderWithProducts } from '../../types/order.types';
import ErrorMessageJoi from '../../utils/errorMessageJoi';

const schema = Joi.object({
  productsIds: Joi.array().items(Joi.number().required()).required()
    .messages({
      'array.includesRequiredUnknowns': '"productsIds" must include only numbers',
    }),
  userId: Joi.number(),
});

const validateFields = (order: OrderWithProducts) => {
  const { error } = schema.validate(order);

  if (error) ErrorMessageJoi(error);
};

export default validateFields;