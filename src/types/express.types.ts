import { Request } from 'express';

type CustomRequest = Request & {
  userId?: number;
};

export default CustomRequest;
