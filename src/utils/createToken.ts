import JWT from 'jsonwebtoken';
import { Payload } from '../types/user.types';
import config from '../config';

const createTokenJWT = (payload: Payload) => {
  const { secret, header } = config.JWT;

  const token = JWT.sign(payload, secret, header);

  return { token };
};

export default createTokenJWT;