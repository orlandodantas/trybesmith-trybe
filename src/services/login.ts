import { UnauthorizedError } from 'restify-errors';
import connection from '../models/connection';
import LoginModel from '../models/login';
import Login from '../types/login.types';
import { Credential, Payload } from '../types/user.types';
import createTokenJWT from '../utils/createToken';

class LoginService {
  private model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async login(login: Login): Promise<Credential> {
    const { username, password } = login;

    const result = await this.model.login({ username, password });

    if (!result || result.length === 0) throw new UnauthorizedError('Username or password invalid');

    const payload: Payload = {
      id: result[0].id,
      username: result[0].username,
    };

    return createTokenJWT(payload);
  }
}

export default LoginService;