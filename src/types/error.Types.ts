import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';

type MyError = Error & {
  statusCode: StatusCodes,
  details: Joi.ValidationError,
};

export default MyError;
