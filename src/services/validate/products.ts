import Joi from 'joi';
import Product from '../../types/product.types';

const scheme = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const validateFields = (product: Product) => {
  const { error } = scheme.validate(product);
  
  if (error) throw error;
};

export default validateFields;