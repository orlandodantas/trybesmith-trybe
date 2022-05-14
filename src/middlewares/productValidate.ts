import { NextFunction, Request, Response } from 'express';
import validateFields from '../services/validate/products';
import Product from '../types/product.types';

const productValidate = (req: Request, _res: Response, next: NextFunction) => {
  const { name, amount } = req.body as Product;

  validateFields({ name, amount });

  next();
};

export default productValidate;