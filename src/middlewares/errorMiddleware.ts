import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';

const errorMiddleware = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  // console.log(err);
  const { isJoy, statusCode } = err as any;
  
  if (isJoy) return res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
  
  if (err.name === 'JsonWebTokenError') { 
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Usuário não autorizado' });
  }
  
  if (statusCode) return res.status(statusCode).json({ message: err.message });

  console.log(err);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Erro interno no servidor!' });
};

export default errorMiddleware;