import { NextFunction, Request, Response } from 'express';
import validateFields from '../services/validate/users';
import User from '../types/user.types';

const userValidate = (req: Request, _res: Response, next: NextFunction) => {
  const { username, classe, level, password } = req.body as User;

  validateFields({ username, classe, level, password });

  next();
};

export default userValidate;