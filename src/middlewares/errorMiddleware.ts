import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';
import Joi from 'joi';

const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { statusCode, details } = err as any;
  
  if (Joi.isError(err)) {
    if (details[0].type === 'any.required') {
      return res.status(StatusCodes.BAD_REQUEST).json(err.message);
    }

    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json(err.message);
  }
  
  if (err.name === 'JsonWebTokenError') { 
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Usuário não autorizado' });
  }
  
  if (statusCode) return res.status(statusCode).json({ message: err.message });

  console.log(err);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Erro interno no servidor!' });
};

export default errorMiddleware;