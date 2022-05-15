import { Pool } from 'mysql2/promise';
import Login from '../types/login.types';
import { Payload } from '../types/user.types';

class LoginModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async login(login: Login): Promise<Payload[]> {
    const { username, password } = login;
    const [resultLogin] = await this.connection.execute(
      'SELECT id, username FROM Trybesmith.Users WHERE username = ? and password = ?',
      [username, password],
    );

    return resultLogin as Payload[];
  }
}

export default LoginModel;