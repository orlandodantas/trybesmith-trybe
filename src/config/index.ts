import 'dotenv/config';
import Config from '../types/config.types';

const config: Config = {
  DB: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  },
  JWT: {
    secret: 'topSecret',
    header: {
      expiresIn: '1d',
      algorithm: 'HS256',
    },
  },
};

// Coloquei a senha aqui nesse arquivo ao invés de um .env porque o projeto (testes) não aceita

export default config;
