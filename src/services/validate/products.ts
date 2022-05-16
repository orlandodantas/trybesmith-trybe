import Joi from 'joi';
import Product from '../../types/product.types';
import ErrorMessageJoi from '../../utils/errorMessageJoi';

const schema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const validateFields = (product: Product) => {
  const { error } = schema.validate(product);
  
  if (error) ErrorMessageJoi(error);
};

export default validateFields;