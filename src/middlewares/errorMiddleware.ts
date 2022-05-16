import 'express-async-errors';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';
import MyError from '../types/error.Types';

const errorMiddleware = (err: MyError, _req: Request, res: Response, _next: NextFunction) => {
  // const { statusCode, details } = err as any;
  
  if (Joi.isError(err)) {
    if (err.details[0].type === 'any.required') {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
    }

    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: err.message });
  }
  
  if (err.name === 'JsonWebTokenError') { 
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
  }
  
  if (err.statusCode) return res.status(err.statusCode).json({ message: err.message });

  console.log(err);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Erro interno no servidor!' });
};

export default errorMiddleware;