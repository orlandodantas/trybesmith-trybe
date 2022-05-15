import { NextFunction, Request, Response } from 'express';
import validateFields from '../services/validate/login';
import Login from '../types/login.types';

const loginValidate = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body as Login;
  validateFields({ username, password });

  next();
};

export default loginValidate;