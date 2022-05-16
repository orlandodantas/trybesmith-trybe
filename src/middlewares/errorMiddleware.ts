import 'express-async-errors';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import MyError from '../types/error.Types';

const errorMiddleware = (err: MyError, _req: Request, res: Response, _next: NextFunction) => {
  if (err.name === 'JsonWebTokenError') { 
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
  }
  
  if (err.statusCode) return res.status(err.statusCode).json({ message: err.message });

  console.log(err);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Erro interno no servidor!' });
};

export default errorMiddleware;