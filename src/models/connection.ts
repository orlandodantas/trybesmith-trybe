import mysql, { Pool } from 'mysql2/promise';
import config from '../config';

const { host, user, password } = config.DB;

const connection: Pool = mysql.createPool({
  host,
  user,
  password,
});

export default connection;