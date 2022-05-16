import { NextFunction, Response } from 'express';
import JWT from 'jsonwebtoken';
import { UnauthorizedError } from 'restify-errors';
import config from '../config';
import CustomRequest from '../types/express.types';
import { Payload } from '../types/user.types';

const { secret } = config.JWT;

const auth = (req: CustomRequest, _res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) throw new UnauthorizedError('Token not found');

  const decoded = JWT.verify(authorization, secret) as Payload;

  req.userId = decoded.id;

  next();
};

export default auth;