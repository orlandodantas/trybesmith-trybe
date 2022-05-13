import 'dotenv/config';
import DB from '../types/config.types';

const config: DB = {
  DB: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  },
};

export default config;
