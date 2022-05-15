import { SignOptions } from 'jsonwebtoken';

type Config = {
  DB: { 
    host: string | undefined;
    user: string | undefined;
    password: string | undefined;
  },
  JWT: {
    secret: string;
    header: SignOptions;
  },
};

export default Config;