import { NextFunction, Response } from 'express';
import validateFields from '../services/validate/orders';
import CustomRequest from '../types/express.types';

const orderValidate = (req: CustomRequest, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  const userId = req.userId as number;

  validateFields({ userId, productsIds });

  next();
};

export default orderValidate;