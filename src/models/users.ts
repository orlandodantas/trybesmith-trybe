import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../types/user.types';

class UsersModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: User): Promise<void> {
    const { username, classe, level, password } = user;
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) values (?, ?, ?, ?)',
      [username, classe, level, password],
    );
  }
}

export default UsersModel;